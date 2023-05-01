import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Card, Text } from "react-native-paper";

const PageError = (props: { error: Error; resetError: () => void }) => {
  console.error(props.error);

  return (
    <View style={styles.container}>
      <Text variant="headlineSmall">Error</Text>
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="bodySmall">Something happened!</Text>
          <Text variant="bodySmall">{props.error.toString()}</Text>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => props.resetError()}>Try again</Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },

  card: {
    width: "100%",
  },
});

export default PageError;
