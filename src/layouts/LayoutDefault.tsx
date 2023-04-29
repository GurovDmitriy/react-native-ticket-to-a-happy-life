import PageAbout from "../pages/PageAbout";
import PageTicket from "../pages/PageTicket";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

// TODO: rename screen - stack
function LayoutDefault() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="About" component={PageAbout} />
      <Tab.Screen name="Ticket" component={PageTicket} />
    </Tab.Navigator>
  );
}

export default LayoutDefault;
