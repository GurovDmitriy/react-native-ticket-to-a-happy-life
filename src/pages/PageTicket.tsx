import React from "react";
import { StyleSheet, View } from "react-native";
import ContainerTicket from "../containers/ContainerTable";

function PageTicket() {
  return (
    <View style={styles.container}>
      <ContainerTicket />
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

export default PageTicket;
