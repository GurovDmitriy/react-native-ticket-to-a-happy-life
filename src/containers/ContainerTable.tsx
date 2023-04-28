import React, {
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import AppLoading from "../components/AppLoading";
import AppTable from "../components/AppTable";
import AppHeader from "../components/AppHeader";

function reducer(state: any, action: any) {
  switch (action.type) {
    case "setTableStart":
      return {
        ...state,
        pending: true,
      };

    case "setTableSuccess":
      return {
        ...state,
        entities: action.payload,
        error: null,
        pending: false,
      };

    case "setTableFailure":
      return {
        ...state,
        pending: false,
        error: action.payload,
      };
  }
}

const initState = {
  entities: null,
  pending: false,
  error: null,
};

function ContainerTicket(props: any) {
  const [state, dispatch] = useReducer(reducer, initState);
  const titleList = ["id", "last", "highestBid"];

  const table = renderTable();

  const loadData = useCallback(async () => {
    try {
      dispatch({ type: "setTableStart", payload: null });

      const response = await fetch(
        "https://poloniex.com/public?command=returnTicker&currencyPair=BTC_ETH"
      );

      const ticker = await response.json();
      const dataTable = [ticker.BTC_ETH];
      console.log(dataTable);

      dispatch({ type: "setTableSuccess", payload: dataTable });
    } catch (err) {
      console.error(err);
      dispatch({ type: "setTableFailure", payload: "Error" });
    }
  }, []);

  const runFetch: any = useCallback(() => {
    const timerId = setInterval(() => {
      loadData();
    }, 5000);

    return () => clearInterval(timerId);
  }, [loadData]);

  useFocusEffect(runFetch);

  function renderTable() {
    let component = null;

    if (state.entities) {
      component = getFragmentTable();
    } else if (!state.entities && state.pending) {
      component = getFragmentLoading();
    }

    return component;
  }

  function getFragmentTable() {
    const header = state.error ? "Error" : "Header";

    return (
      <AppTable
        header={<AppHeader>{header}</AppHeader>}
        footer={<AppHeader>footer</AppHeader>}
        data={state.entities}
        titleList={titleList}
      />
    );
  }

  function getFragmentLoading() {
    return <AppLoading>Loading...</AppLoading>;
  }

  return <>{table}</>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ContainerTicket;
