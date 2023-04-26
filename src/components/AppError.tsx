import React from "react";
import { Text } from "react-native";

function AppError(props: any) {
  const { children } = props;

  return <Text>{children}</Text>;
}

export default AppError;
