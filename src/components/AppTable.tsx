import React from "react";
import { StyleSheet, View } from "react-native";
import { DataTable } from "react-native-paper";

function AppTable(props: AppTablePropsI) {
  const { data, header, footer, titleList } = props;

  function renderTitleList() {
    return titleList.map((title: string) => {
      return <DataTable.Title key={title}>{title}</DataTable.Title>;
    });
  }

  function renderRowList() {
    return data.map((row) => {
      return <DataTable.Row key={row.id}>{renderCellList(row)}</DataTable.Row>;
    });
  }

  function renderCellList(row: AppTableItemI) {
    return titleList.map((title) => {
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

interface AppTableItemI {
  id: number | string;

  [key: string]: any;
}

export interface AppTablePropsI {
  data: AppTableItemI[];
  header: React.ReactNode;
  footer: React.ReactNode;
  titleList: string[];
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});

export default AppTable;
