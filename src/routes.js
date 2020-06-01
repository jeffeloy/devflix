import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const AppTab = createBottomTabNavigator();

import Courses from "./pages/Courses";
import Subjects from "./pages/Subjects";

export default function Routes() {
  return (
    <NavigationContainer>
      <AppTab.Navigator screenOptions={{ headerShown: false }}>
        <AppTab.Screen name="Courses" component={Courses} />
        <AppTab.Screen name="Subjects" component={Subjects} />
      </AppTab.Navigator>
    </NavigationContainer>
  );
}
