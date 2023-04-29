import React from "react";
import { Text } from "react-native-paper";

function AppError(props: any) {
  const { children } = props;

  return <Text variant="labelSmall">{children}</Text>;
}

export default AppError;
