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
import AppError from "../components/AppError";

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
  const { navigation } = props;

  const [state, dispatch] = useReducer(reducer, initState);

  const loadData = useCallback(async () => {
    try {
      dispatch({ type: "setTableStart", payload: null });

      const response = await fetch(
        "https://poloniex.com/public?command=returnTicker&currencyPair=BTC_ETH"
      );

      const ticker = await response.json();
      const dataTable = [
        {
          name: ticker.BTC_ETH.id,
          last: ticker.BTC_ETH.last,
          highestBid: ticker.BTC_ETH.highestBid,
          percentChange: ticker.BTC_ETH.percentChange,
        },
      ];

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
      component = (
        <AppTable
          data={state.entities}
          titleList={["name", "last", "highestBid"]}
        />
      );
    } else {
      component = <AppLoading>Loading...</AppLoading>;
    }

    return component;
  }

  function renderError() {
    let component = null;

    if (state.error) {
      component = <AppError>{state.error}</AppError>;
    }

    return component;
  }

  return (
    <>
      {renderError()}
      {renderTable()}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ContainerTicket;
