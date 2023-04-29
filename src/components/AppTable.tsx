import { DataTable } from "react-native-paper";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { v4 as uuidv4 } from "uuid";

function AppTable(props: any) {
  const { data, header, footer, titleList } = props;
  const [keys] = useState(data.map(() => uuidv4()));

  // TODO: check render twice
  console.log("render");

  function renderTitleList() {
    return titleList.map((title: string) => {
      return <DataTable.Title key={title}>{title}</DataTable.Title>;
    });
  }

  function renderRowList() {
    return data.map((row: any, index: number) => {
      return (
        <DataTable.Row key={keys[index]}>{renderCellList(row)}</DataTable.Row>
      );
    });
  }

  function renderCellList(row: any) {
    return titleList.map((title: any) => {
      return <DataTable.Cell key={title}>{row[title]}</DataTable.Cell>;
    });
  }

  const titles = renderTitleList();
  const rows = renderRowList();

  return (
    <View style={styles.container}>
      {header}
      <DataTable>
        <DataTable.Header>{titles}</DataTable.Header>
        {rows}
      </DataTable>
      {footer}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});

export default AppTable;
