import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import AppFallback from "../components/AppFallback";
import AppTable from "../components/AppTable";
import AppContent from "../components/AppContent";
import { StoreContext } from "../providers/StoreContext";
import { observer } from "mobx-react-lite";
import { from, interval, EMPTY } from "rxjs";
import { switchMap, catchError } from "rxjs/operators";
import { getStatus } from "../tools/getStatus";

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
      const header = failure(store.table) ? "Error" : "Header";

      return (
        <AppTable
          header={<AppContent>{header}</AppContent>}
          footer={<AppContent>Footer</AppContent>}
          data={store.table.entities}
          titleList={titleList}
        />
      );
    }

    if (isFirstFetch()) message = "Loading...";
    if (isNoStarted()) message = "Placeholder";
    if (isError()) message = "Something went wrong";

    return <AppFallback>{message}</AppFallback>;
  }

  const table = renderTable();

  return <>{table}</>;
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ContainerTicket;
