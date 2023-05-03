import React from "react";
import { StyleSheet, View } from "react-native";
import ContainerTable from "../containers/ContainerTable";

function PageTicker() {
  return (
    <View style={styles.container}>
      <ContainerTable />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
});

export default PageTicker;
