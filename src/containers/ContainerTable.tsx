import React, { useCallback, useContext, useEffect, useState } from "react";
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
import settings from "../tools/settings";

const ContainerTable = observer(function ContainerTicket(props: any) {
  const titleList = settings.TITLE_LIST;
  const store = useContext(StoreContext);
  const [isMounted, setIsMounted] = useState(false);
  const { useless, pending, failure } = getStatus();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await store.table.fetchData();
        setIsMounted(true);
      } catch {
        setIsMounted(false);
      }
    };

    fetchData();
  }, [store.table]);

  useFocusEffect(() => {
    const fetchDataSub = interval(settings.DELAY)
      .pipe(
        switchMap(() => {
          if (isMounted) {
            return from(store.table.fetchData());
          } else {
            return EMPTY;
          }
        })
      )
      .subscribe();

    return () => {
      fetchDataSub.unsubscribe();
    };
  });

  const getFragmentTable = useCallback(() => {
    let header = <Text variant="labelSmall">Header</Text>;
    const footer = <Text variant="labelSmall">Copyright MIT License</Text>;

    if (store.table.error) header = <AppError>Error</AppError>;

    return (
      <AppTable
        header={header}
        footer={footer}
        data={store.table.entities}
        titleList={titleList}
      />
    );
  }, [store.table.entities, store.table.error, titleList]);

  function getFragmentFallback(message: string) {
    return <Text>{message}</Text>;
  }

  function renderTable() {
    let component = null;
    let message = "Unknown Error";

    const isExistEntities = () => Boolean(store.table.entities);
    const isFirstFetch = () => !isExistEntities() && pending(store.table);
    const isError = () => !isExistEntities() && failure(store.table);
    const isNoUse = () => isExistEntities() && useless(store.table);
    const isNoStarted = () => !isExistEntities() && useless(store.table);

    if (isExistEntities() || isNoUse()) {
      component = getFragmentTable();
    } else {
      if (isFirstFetch()) message = "Loading...";
      if (isNoStarted()) message = "Placeholder";
      if (isError()) message = "Something went wrong";

      component = getFragmentFallback(message);
    }

    return component;
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

export default ContainerTable;
