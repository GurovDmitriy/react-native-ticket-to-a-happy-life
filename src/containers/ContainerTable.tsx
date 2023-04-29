import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import AppError from "../components/AppError";
import AppTable from "../components/AppTable";
import { StoreContext } from "../providers/StoreContext";
import { observer } from "mobx-react-lite";
import { from, interval, EMPTY } from "rxjs";
import { switchMap, catchError } from "rxjs/operators";
import { getStatus } from "../tools/getStatus";
import { Card, Text } from "react-native-paper";

const ContainerTicket = observer(function ContainerTicket(props: any) {
  const store = useContext(StoreContext);
  const titleList = ["id", "last", "highestBid"];

  const { useless, pending, failure } = getStatus();

  useFocusEffect(() => {
    const fetchData$ = interval(5000)
      .pipe(
        switchMap(() => {
          return from(store.table.fetchData()).pipe(catchError(() => EMPTY));
        })
      )
      .subscribe();

    return () => fetchData$.unsubscribe();
  });

  function renderTable() {
    const component = null;
    let message = "Unknown Error";

    const isExistEntities = () => Boolean(store.table.entities);
    const isFirstFetch = () => !isExistEntities() && pending(store.table);
    const isError = () => !isExistEntities() && failure(store.table);
    const isNoUse = () => isExistEntities() && useless(store.table);
    const isNoStarted = () => !isExistEntities() && useless(store.table);

    if (isExistEntities() || isNoUse()) {
      let header = <Text variant="labelSmall">Header</Text>;
      if (failure(store.table)) header = <AppError>Error</AppError>;

      return (
        <AppTable
          header={
            <Text variant="labelSmall" style={{ color: "red" }}>
              {header}
            </Text>
          }
          footer={<Text variant="labelSmall">Footer</Text>}
          data={store.table.entities}
          titleList={titleList}
        />
      );
    }

    if (isFirstFetch()) message = "Loading...";
    if (isNoStarted()) message = "Placeholder";
    if (isError()) message = "Something went wrong";

    return <AppError>{message}</AppError>;
  }

  const table = renderTable();

  return (
    <>
      <Text variant="headlineSmall">Ticket</Text>
      <Card style={styles.container}>
        <Card.Content>{table}</Card.Content>
      </Card>
    </>
  );
});

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});

export default ContainerTicket;
