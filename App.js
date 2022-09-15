import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./navigation";
import { StyleSheet } from "react-native";
import { store } from "./redux/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store} >
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});
