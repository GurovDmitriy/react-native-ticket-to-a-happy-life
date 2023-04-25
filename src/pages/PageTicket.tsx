import React, { useCallback, useEffect, useRef, useState } from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { DataTable } from "react-native-paper";

function PageTicket(props: any) {
  const { navigation } = props;

  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  const loadData = useCallback(async () => {
    try {
      const response = await fetch(
        "https://poloniex.com/public?command=returnTicker&currencyPair=BTC_ETH"
      );
      const ticker = await response.json();
      const dataTable = {
        name: ticker.BTC_ETH.id,
        last: ticker.BTC_ETH.last,
        highestBid: ticker.BTC_ETH.highestBid,
        percentChange: ticker.BTC_ETH.percentChange,
      };

      setError(null);
      console.log(dataTable);
      setData(dataTable);
    } catch (err) {
      setError(err);
      console.error(err);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      const intervalId = setInterval(() => {
        loadData();
      }, 5000);

      return () => clearInterval(intervalId);
    }, [loadData])
  );

  const loadingFragment = <Text>Loading...</Text>;

  function getTable(data: any) {
    return (
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title>Last</DataTable.Title>
          <DataTable.Title>HighestBid</DataTable.Title>
          <DataTable.Title>PercentChange</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>{data.name}</DataTable.Cell>
          <DataTable.Cell>{data.last}</DataTable.Cell>
          <DataTable.Cell>{data.highestBid}</DataTable.Cell>
          <DataTable.Cell>{data.percentChange}</DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    );
  }

  function RenderTable() {
    let component = null;

    if (data) {
      component = getTable(data);
    } else {
      component = loadingFragment;
    }

    return component;
  }

  function RenderError() {
    let component = null;

    if (error) {
      component = <Text>Error</Text>;
    }

    return component;
  }

  // const RenderTable: JSX.Element = getRenderTable();

  return (
    <View style={styles.container}>
      <Text>Ticket</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("About")}
      />
      <RenderError />
      <RenderTable />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PageTicket;
