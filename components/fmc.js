import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import Color from "../constant/color";
const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Ionicons name="arrow-back-outline" size={30} color="black" />
    </View>
  );
};
const Menubar = () => {
  return (
    <View style={styles.menubar}>
      <Ionicons name="grid" size={30} color={Color.lightRed} />
    </View>
  );
};

const Menulist = () => {
  return (
    <View style={styles.list}>
      <Text>American Burger</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  navbar: {
    justifyContent: "flex-start",
  },
  menubar: {
    alignItems: "flex-end",
    padding: 15,
  },
  list: {},
});

export { Navbar, Menubar, Menulist };
