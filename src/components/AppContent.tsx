import React from "react";
import { Text } from "react-native";

function AppContent(props: any) {
  const { children } = props;

  return <Text>{children}</Text>;
}

export default AppContent;
