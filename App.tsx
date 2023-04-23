import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { Searchbar } from "react-native-paper";

export default function App() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query: any) => setSearchQuery(query);

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.main}>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
          <Text>react native {searchQuery}</Text>
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  main: {
    marginTop: StatusBar.currentHeight || 0,
  },
});
