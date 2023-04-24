import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PageTicket from "./src/pages/PageTicket";
import PageAbout from "./src/pages/PageAbout";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="About" component={PageAbout} />
          <Stack.Screen name="Ticket" component={PageTicket} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
