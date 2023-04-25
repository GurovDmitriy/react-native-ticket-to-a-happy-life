import React, { useCallback, useEffect, useRef, useState } from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

function PageTicket(props: any) {
  const { navigation } = props;

  const [data, setData] = useState(null);

  const loadData = useCallback(() => {
    console.log("call api");
    // setData()
  }, []);

  useFocusEffect(
    useCallback(() => {
      const intervalId = setInterval(() => {
        loadData();
      }, 5000);

      return () => clearInterval(intervalId);
    }, [loadData])
  );

  return (
    <View style={styles.container}>
      <Text>Ticket</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("About")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PageTicket;
