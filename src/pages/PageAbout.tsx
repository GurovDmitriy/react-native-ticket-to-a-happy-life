import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, View } from "react-native";
import ContainerAbout from "../containers/ContainerAbout";
import { RootStackParamList } from "../layouts/LayoutDefault";

function PageAbout(props: PageAboutPropsI) {
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

interface PageAboutPropsI {
  navigation: StackNavigationProp<RootStackParamList, "About">;
}

export default PageAbout;
