import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../screens/login/Login";
import Start from "../screens/home/Start";
import StartAdmin from "../screens/admin/StartAdmin";

const Navigation = () => {
  const { Navigator, Screen } = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Login"
          component={Login}
          options={{
            unmountOnBlur: true,
            headerShown: false,
          }}
        />
        <Screen
          name="Start"
          component={Start}
          options={{
            unmountOnBlur: true,
            headerShown: false,
          }}
        />
        {/* SCREENS DE ADMINS */}
        <Screen
          name="StartAdmin"
          component={StartAdmin}
          options={{
            unmountOnBlur: true,
            headerShown: false,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
