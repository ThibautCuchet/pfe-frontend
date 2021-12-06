import React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ViewGridIcon } from "../icons/ViewGridIcon";
import { StarIcon } from "../icons/StarIcon";
import { CreateIcon } from "../icons/CreateIcon";
import { MessageIcon } from "../icons/MessageIcon";
import { ProfileIcon } from "../icons/ProfileIcon";

const Tab = createBottomTabNavigator();

const Hello = () => {
  return (
    <View>
      <Text>Hello World !</Text>
    </View>
  );
};

export const Router = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Products"
        component={Hello}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => <ViewGridIcon />,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Hello}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => <StarIcon />,
        }}
      />
      <Tab.Screen
        name="Add"
        component={Hello}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => <CreateIcon />,
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Hello}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => <MessageIcon />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Hello}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => <ProfileIcon />,
        }}
      />
    </Tab.Navigator>
  );
};
