import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
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
      <Ionicons name="grid" size={20} color={Color.lightRed} />
    </View>
  );
};

const Menulist = (props) => {
  return (
    <View style={styles.list}>
      <View>
        <Image source={props.imagesource} style={styles.image} />
      </View>
      <View style={styles.text}>
        <Text style={styles.title}>{props.title}</Text>
        <Text numberOfLines={3} textBreakStrategy="simple" style={styles.info}>
          {props.info}
        </Text>
      </View>
      <View style={styles.menuleft}>
        <View style={styles.iconContainer}>
          <Ionicons name="add-outline" size={20} color="white" />
        </View>
        <Text style={styles.amount}>${props.amount}</Text>
      </View>
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
  list: {
    flexDirection: "row",
    width: "100%",
    height: 100,
    margin: 5,
    justifyContent: "space-around",
  },
  image: {
    flex: 1,
    backgroundColor: "white",
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: "contain",
  },
  text: {
    flex: 3,
    marginLeft: 5,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  title: { fontSize: 16, fontWeight: "bold" },
  info: { color: "gray" },
  menuleft: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "space-around",
  },
  iconContainer: {
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },
  amount: {
    padding: 5,
  },
});

export { Navbar, Menubar, Menulist };
