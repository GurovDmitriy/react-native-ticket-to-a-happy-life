import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LayoutDefault from "./src/layouts/LayoutDefault";
import StoreProvider from "./src/providers/StoreContext";
import ErrorBoundary from "react-native-error-boundary";
import PageError from "./src/pages/PageError";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ErrorBoundary FallbackComponent={PageError}>
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
    </ErrorBoundary>
  );
}
