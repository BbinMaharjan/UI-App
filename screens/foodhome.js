import React from "react";
import { View, Text, StyleSheet, ProgressViewIOSComponent } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Color from "../constant/color";
import { CardView, ListName, Menulist } from "../components/fmc";

const FoodHome = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.home}>
        <View style={styles.location}>
          <Ionicons name="location" size={30} color="red" />
          <Text style={{ fontSize: 16, padding: 5 }}>2142 Doggle NY,USA</Text>
        </View>
        <View style={styles.search}>
          <Text style={{ fontSize: 16, padding: 5 }}>Search Food</Text>
          <Ionicons name="search" size={30} color="red" />
        </View>
        <View style={styles.m}>
          <ListName icon="beer-sharp" txt="Drink" />
          <ListName icon="fast-food-sharp" txt="Combo" />
          <ListName icon="restaurant-sharp" txt="Resturnet" />
          <ListName icon="pizza-sharp" txt="Pizza" />
        </View>
        <Text style={{ fontWeight: "bold", marginTop: 10, fontSize: 20 }}>
          Recommended Deals
        </Text>
        <View style={styles.m}>
          <CardView
            title="Burger"
            imagesource={require("../assets/burger.png")}
            amount="$20.00"
            color={Color.lightYellow}
          />
          <CardView
            title="Burger"
            imagesource={require("../assets/burger.png")}
            amount="$20.00"
            color={Color.lightBlue}
          />
        </View>
        <Text style={{ fontWeight: "bold", marginTop: 10, fontSize: 20 }}>
          Other Food
        </Text>
        <View>
          <Menulist
            imagesource={{
              uri:
                "https://images.squarespace-cdn.com/content/v1/54b04776e4b0978f55a264b3/1592191774528-EDROC3VGMMQ69Z0BIX26/ke17ZwdGBToddI8pDm48kLcCyqm59C3feZHaRXjsmSF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmMzCLa7uFkdv2vMekBxfSUkxklzQQsKyEKCsoXqT_uq_OYcE9zvKwG2IPkTOl2cn5/vnyc-burger.png",
            }}
            title="Amerinac Burger"
            info="A dish consisting of a flat round cake of minced beef, or sometimes another savoury ingredient, that is fried or grilled and served in a split bun or roll with various condiments and toppings."
            amount="23.00"
          />
          <Menulist
            imagesource={{
              uri:
                "https://images.squarespace-cdn.com/content/v1/54b04776e4b0978f55a264b3/1592191774528-EDROC3VGMMQ69Z0BIX26/ke17ZwdGBToddI8pDm48kLcCyqm59C3feZHaRXjsmSF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmMzCLa7uFkdv2vMekBxfSUkxklzQQsKyEKCsoXqT_uq_OYcE9zvKwG2IPkTOl2cn5/vnyc-burger.png",
            }}
            title="Amerinac Burger"
            info="A dish consisting of a flat round cake of minced beef, or sometimes another savoury ingredient, that is fried or grilled and served in a split bun or roll with various condiments and toppings."
            amount="23.00"
          />
        </View>
      </View>
      <View style={styles.footer}>
        <Ionicons name="home" size={30} color="red" />
        <Ionicons name="search" size={30} color="red" />
        <Ionicons name="cart" size={30} color="red" />
        <Ionicons name="add-circle-sharp" size={30} color="red" />
        <Ionicons name="people" size={30} color="red" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  home: {
    flex: 15,
    padding: 10,
    margin: 5,
  },
  location: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "baseline",
  },
  search: {
    margin: 10,
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
    backgroundColor: Color.lightesGray,
    borderRadius: 50,
  },
  m: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
  },
  footer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#dee1e3",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default FoodHome;
