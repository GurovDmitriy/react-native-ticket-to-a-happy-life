import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Searchbar } from "react-native-paper";
import AppRestaurantsInfo from "../components/AppRestaurantsInfo";

const data = [
  {
    test: "title1",
    image: "image",
  },
  {
    test: "title2",
    image: "image",
  },
  {
    test: "title3",
    image: "image",
  },
  {
    test: "title4",
    image: "image",
  },
  {
    test: "title5",
    image: "image",
  },
  {
    test: "title6",
    image: "image",
  },
  {
    test: "title7",
    image: "image",
  },
  {
    test: "title8",
    image: "image",
  },
  {
    test: "title9",
    image: "image",
  },
  {
    test: "title10",
    image: "image",
  },
];

function AppRestaurantsScreen() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query: any) => setSearchQuery(query);

  const cards = data.map((card) => (
    <AppRestaurantsInfo key={card.test} style={styles.card} />
  ));

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <ScrollView style={styles.main}>{cards}</ScrollView>
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
    flexGrow: 3,
    height: 100,
    marginBottom: 20,
  },

  card: {
    margin: 10,
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
