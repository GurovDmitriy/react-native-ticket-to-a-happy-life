import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import AppRestaurantsScreen from "./src/features/screens/AppRestaurantsScreen";

export default function App() {
  return (
    <PaperProvider>
      <AppRestaurantsScreen />
    </PaperProvider>
  );
}
