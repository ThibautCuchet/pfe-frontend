import React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  CreateIcon,
  MessageIcon,
  ProfileIcon,
  StarIcon,
  ViewGridIcon,
} from "./Icons";
import { ProductsList } from "../views/ProductsList";
import { FavoritesList } from "../views/FavoritesList";
import { CreateProduct } from "../views/CreateProduct";
import { Messages } from "../views/Messages";
import { Profile } from "../views/Profile";

const Tab = createBottomTabNavigator();

const tabScreenOption = (activeColor, Icon) => {
  return {
    tabBarShowLabel: false,
    tabBarActiveTintColor: activeColor,
    tabBarInactiveTintColor: "#426260",
    tabBarIcon: ({ color }) => <Icon color={color} />,
  };
};

export const Router = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#006f91",
          height: 75,
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15,
        },
      }}
    >
      <Tab.Screen
        name="Products"
        component={ProductsList}
        options={tabScreenOption("#119DB8", ViewGridIcon)}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesList}
        options={tabScreenOption("#F8AA00", StarIcon)}
      />
      <Tab.Screen
        name="Add"
        component={CreateProduct}
        options={tabScreenOption("#F8AA00", CreateIcon)}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={tabScreenOption("#019670", MessageIcon)}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={tabScreenOption("#E7276C", ProfileIcon)}
      />
    </Tab.Navigator>
  );
};
