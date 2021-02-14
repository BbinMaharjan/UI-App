import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Navbar, Menubar, Menulist } from "../components/fmc";
import Color from "../constant/color";
const Foodmenu = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.heading}>
        <Navbar />
        <Text style={styles.title}> American</Text>
        <Text style={styles.subtitle}>Food</Text>
      </View>
      <View style={styles.menu}>
        <Menubar />
        <Menulist />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Color.lightYellow,
  },
  heading: {
    flex: 2,
    padding: 15,
  },
  title: { fontSize: 25, marginTop: 15, fontWeight: "bold" },
  subtitle: { fontSize: 25, marginLeft: 8 },
  menu: {
    flex: 8,
    padding: 15,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
export default Foodmenu;
