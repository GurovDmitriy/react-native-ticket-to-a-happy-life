import PageAbout from "../pages/PageAbout";
import PageTicket from "../pages/PageTicket";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

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
        name="Ticket"
        component={PageTicket}
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
