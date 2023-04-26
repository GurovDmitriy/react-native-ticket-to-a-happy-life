import { DataTable } from "react-native-paper";
import React from "react";

function AppTable(props: any) {
  const { data } = props;

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

export default AppTable;
