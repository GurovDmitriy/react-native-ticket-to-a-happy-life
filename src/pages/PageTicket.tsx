import React from "react";
import { StyleSheet, View, Button, Text } from "react-native";

function PageTicket(props: any) {
  const { style } = props;

  return (
    <View style={styles.container}>
      <Text>Ticket</Text>
      <Button
        title="Go to About"
        onPress={() => props.navigation.navigate("About")}
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

export default PageTicket;
