import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import MCI from "react-native-vector-icons/MaterialCommunityIcons";
import PLATI from "react-native-vector-icons/MaterialIcons";
import Information from "./Information";
import Otros from "./Otros";
import Chanchito from "./Chanchito";
import AddChanchito from "../screens/AddChanchito";

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator
      initialRouteName="Information"
      screenOptions={{
        tabBarActiveTintColor: "#FFE5DE",
        tabBarInactiveTintColor: "#C3867F",      
        tabBarLabelStyle: {
          fontSize: 18,
          paddingBottom: 5,
          margin: 2,
         
          fontWeight: "600",
        },
        tabBarStyle: [
          {
            display: "flex",
            height: 80,
            backgroundColor: "#FDBCB4",
          },
          null,
        ],
      }}
    >
      <Tab.Screen
        name="Dinero"
        component={Information}
        options={{
          tabBarIcon: ({ color, size }) => (
            <PLATI
              name="attach-money"
              color={color}
              size={30}
            />
          ), headerShown: false
        }}
      />
      {/* <Tab.Screen
        name="Otros"
        component={Otros}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book" color={color} size={size} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Chanchitos"
        component={Chanchito}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MCI name="piggy-bank" color={color} size={30} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Crear"
        component={AddChanchito}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MCI name="pig-variant-outline" color={color} size={30} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
