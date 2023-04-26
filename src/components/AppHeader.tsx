import React from "react";
import { Text } from "react-native";

function AppHeader(props: any) {
  const { children } = props;

  return <Text>{children}</Text>;
}

export default AppHeader;
