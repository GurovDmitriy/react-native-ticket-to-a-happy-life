import React from "react";
import { View, Button, StyleSheet } from "react-native";
import AppContent from "../components/AppContent";
import { observer } from "mobx-react-lite";

// TODO: rename screen - stack
// TODO: container for about
const PageAbout = observer(function PageAbout(props: any) {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <AppContent>About</AppContent>
      <AppContent>Ticket to a happy life</AppContent>
      <Button
        title="Pull Ticket"
        onPress={() => navigation.navigate("Ticket")}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PageAbout;
