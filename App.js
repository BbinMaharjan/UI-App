import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import FoodHome from "./screens/foodhome";
import FoodMenu from "./screens/foodmenu";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <FoodMenu /> */}
      <FoodHome />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
  },
});
