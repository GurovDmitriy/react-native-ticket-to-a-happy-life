import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

function PageAbout(props: any) {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <Text>About</Text>
      <Button
        title="Go to Ticket"
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
