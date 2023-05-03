import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Button, Card, Text } from "react-native-paper";
import { RootStackParamList } from "../layouts/LayoutDefault";

function ContainerAbout(props: ContainerAboutPropsI) {
  const { navigation } = props;

  return (
    <>
      <Text variant="headlineSmall">Classical history Ticker</Text>
      <Card>
        <Card.Content>
          <Text variant="bodySmall">
            The first recorded signs of a lottery are keno slips from the
            Chinese Han dynasty between 205 and 187 BC.
          </Text>
          <Text variant="bodySmall">
            These lotteries are believed to have helped to finance major
            government projects like the Great Wall of China.
          </Text>
          <Text variant="bodySmall">
            From the Chinese Book of Songs (2nd millennium BC.) comes a
            reference to a game of chance as &quot;the drawing of wood&quot;,
            which in context appears to describe the drawing of lots.
          </Text>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => navigation.navigate("Ticker")}>
            Pull Ticket
          </Button>
        </Card.Actions>
      </Card>
    </>
  );
}

interface ContainerAboutPropsI {
  navigation: StackNavigationProp<RootStackParamList, "About">;
}

export default ContainerAbout;
