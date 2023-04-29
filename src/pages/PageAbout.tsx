import React from "react";
import { View, StyleSheet } from "react-native";
import ContainerAbout from "../containers/ContainerAbout";

function PageAbout(props: any) {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <ContainerAbout navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
});

export default PageAbout;
