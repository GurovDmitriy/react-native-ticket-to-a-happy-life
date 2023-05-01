import React from "react";
import { Text } from "react-native-paper";
import { StyleSheet } from "react-native";

function AppError(props: AppErrorPropsI) {
  const { children } = props;

  return (
    <Text style={styles.container} variant="labelSmall">
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ff7f7f",
    color: "#ffffff",
    paddingLeft: 10,
  },
});

export interface AppErrorPropsI {
  children: React.ReactNode;
}

export default AppError;
