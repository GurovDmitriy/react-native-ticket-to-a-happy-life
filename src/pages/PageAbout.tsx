import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import AppHeader from "../components/AppHeader";
import AppContent from "../components/AppContent";

function PageAbout(props: any) {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <AppHeader>About</AppHeader>
      <AppContent>Ticket to a happy life</AppContent>
      <Button
        title="Pull Ticket"
        onPress={() => navigation.navigate("Ticket")}
      />
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

export default PageAbout;
