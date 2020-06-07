import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Subjects from "./pages/Subjects";

function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Cursos" component={Courses} />
        <AppStack.Screen name="Disciplinas" component={Subjects} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
