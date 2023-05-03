import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import PageAbout from "../pages/PageAbout";
import PageTicker from "../pages/PageTicker";

export type RootStackParamList = {
  About: undefined;
  Ticker: undefined;
};

const Tab = createBottomTabNavigator();

function LayoutDefault() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="About"
        component={PageAbout}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Icon name="information" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Ticker"
        component={PageTicker}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Icon name="ticket-percent" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default LayoutDefault;
