import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import AppRestaurantsInfo from "../components/AppRestaurantsInfo";

function AppRestaurantsScreen() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query: any) => setSearchQuery(query);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <View style={styles.main}>
        <AppRestaurantsInfo />
      </View>
      <View style={styles.footer}>
        <Text>footer</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minWidth: 320,
    minHeight: 400,
    padding: 20,
    marginTop: StatusBar.currentHeight || 0,
  },

  header: {
    marginBottom: 20,
  },

  main: {
    flex: 1,
    height: 100,
    flexGrow: 3,
    backgroundColor: "#f0dcfd",
    marginBottom: 20,
  },

  footer: {
    flex: 1,
    flexGrow: 1,
    height: 100,
    backgroundColor: "#f0dcfd",
  },
});

export default AppRestaurantsScreen;
