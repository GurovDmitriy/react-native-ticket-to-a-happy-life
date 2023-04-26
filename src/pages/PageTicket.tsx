import React from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import AppHeader from "../components/AppHeader";
import ContainerTicket from "../containers/ContainerTable";

function PageTicket(props: any) {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <AppHeader>Ticket</AppHeader>
      <ContainerTicket />
      <Button title="About" onPress={() => navigation.navigate("About")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PageTicket;
