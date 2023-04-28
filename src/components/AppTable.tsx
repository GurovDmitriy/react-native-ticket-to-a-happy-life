import { DataTable } from "react-native-paper";
import React, { memo, useMemo } from "react";
import { StyleSheet, View } from "react-native";

function AppTable(props: any) {
  const { data, header, footer, titleList } = props;

  const titles = renderTitleList();
  const rows = renderRowList();

  function renderTitleList() {
    return titleList.map((title: string) => {
      return <DataTable.Title key={title}>{title}</DataTable.Title>;
    });
  }

  function renderRowList() {
    console.log("render");
    return data.map((row: any) => {
      return (
        <DataTable.Row key={row.name}>{renderCellList(row)}</DataTable.Row>
      );
    });
  }

  function renderCellList(row: any) {
    return titleList.map((title: any) => {
      return <DataTable.Cell key={title}>{row[title]}</DataTable.Cell>;
    });
  }

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
