import React, { useCallback, useEffect, useRef, useState } from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { DataTable } from "react-native-paper";

function PageTicket(props: any) {
  const { navigation } = props;

  const [data, setData] = useState<any>(null);

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

      console.log(dataTable);
      setData(dataTable);
    } catch (err) {
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

  return (
    <View style={styles.container}>
      <Text>Ticket</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("About")}
      />
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title>Last</DataTable.Title>
          <DataTable.Title>HighestBid</DataTable.Title>
          <DataTable.Title>PercentChange</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>{data.name}</DataTable.Cell>
          <DataTable.Cell numeric>{data.last}</DataTable.Cell>
          <DataTable.Cell numeric>{data.highestBid}</DataTable.Cell>
          <DataTable.Cell numeric>{data.percentChange}</DataTable.Cell>
        </DataTable.Row>
      </DataTable>
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
