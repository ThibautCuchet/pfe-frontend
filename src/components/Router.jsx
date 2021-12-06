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

const tabScreenOption = (activeColor, Icon, iconProps) => {
  return {
    tabBarShowLabel: false,
    tabBarActiveTintColor: activeColor,
    tabBarInactiveTintColor: "#426260",
    tabBarIcon: ({ color }) => <Icon color={color} {...iconProps} />,
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
        options={({ navigation }) =>
          tabScreenOption("#119DB8", ViewGridIcon, {
            active: navigation.isFocused(),
            title: "Producs",
          })
        }
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesList}
        options={({ navigation }) =>
          tabScreenOption("#F8AA00", StarIcon, {
            active: navigation.isFocused(),
            title: "Favorites",
          })
        }
      />
      <Tab.Screen
        name="Add"
        component={CreateProduct}
        options={({ navigation }) =>
          tabScreenOption("#F8AA00", CreateIcon, navigation.isFocused())
        }
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={({ navigation }) =>
          tabScreenOption("#019670", MessageIcon, {
            active: navigation.isFocused(),
            title: "Messages",
          })
        }
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={({ navigation }) =>
          tabScreenOption("#E7276C", ProfileIcon, {
            active: navigation.isFocused(),
            title: "Profile",
          })
        }
      />
    </Tab.Navigator>
  );
};
