import React from "react";
import { DataTable } from "react-native-paper";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { styled } from "styled-components/native";

const StyledView = styled.View`
  width: 100%;
`;

function AppTable<T extends AppTablePropsI>(props: AppTablePropsI) {
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
    <StyledView>
      {header}
      <DataTable>
        <DataTable.Header>{titles}</DataTable.Header>
        {rows}
      </DataTable>
      {footer}
    </StyledView>
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

export default AppTable;
