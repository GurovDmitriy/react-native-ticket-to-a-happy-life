import { DataTable } from "react-native-paper";
import React from "react";
import { View, Text } from "react-native";

function AppTable(props: any) {
  const { data, header, footer, titleList } = props;

  console.log("render");

  function renderTitleList(titleList: string[]) {
    return titleList.map((title: string) => {
      return <DataTable.Title key={title}>{title}</DataTable.Title>;
    });
  }

  function renderRowList(data: any[], titleList: any[]) {
    return data.map((row: any) => {
      return (
        <DataTable.Row key={row.name}>
          {renderCellList(row, titleList)}
        </DataTable.Row>
      );
    });
  }

  function renderCellList(row: any, titleList: any[]) {
    return titleList.map((title: any) => {
      return <DataTable.Cell key={title}>{row[title]}</DataTable.Cell>;
    });
  }

  return (
    <DataTable>
      <DataTable.Header>{renderTitleList(titleList)}</DataTable.Header>

      {renderRowList(data, titleList)}
    </DataTable>
  );
}

export default AppTable;
