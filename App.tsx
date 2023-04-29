import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LayoutDefault from "./src/layouts/LayoutDefault";
import StoreProvider from "./src/providers/StoreContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <StoreProvider>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="LayoutDefault"
              component={LayoutDefault}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  );
}
