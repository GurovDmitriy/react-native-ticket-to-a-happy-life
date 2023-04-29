import React from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import AppContent from "../components/AppContent";
import ContainerTicket from "../containers/ContainerTable";

// TODO: rename screen - stack
function PageTicket(props: any) {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <AppContent>Ticket</AppContent>
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
