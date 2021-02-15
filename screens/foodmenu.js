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
        <View style={styles.burgerlist}>
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
            title="Cheeze hot dog"
            info="A dish consisting of a flat round cake of minced beef, or sometimes another savoury ingredient, that is fried or grilled and served in a split bun or roll with various condiments and toppings."
            amount="38.00"
          />
          <Menulist
            imagesource={{
              uri:
                "https://images.squarespace-cdn.com/content/v1/54b04776e4b0978f55a264b3/1592191774528-EDROC3VGMMQ69Z0BIX26/ke17ZwdGBToddI8pDm48kLcCyqm59C3feZHaRXjsmSF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmMzCLa7uFkdv2vMekBxfSUkxklzQQsKyEKCsoXqT_uq_OYcE9zvKwG2IPkTOl2cn5/vnyc-burger.png",
            }}
            title="Chicken Burger"
            info="A dish consisting of a flat round cake of minced beef, or sometimes another savoury ingredient, that is fried or grilled and served in a split bun or roll with various condiments and toppings."
            amount="23.00"
          />
          <Menulist
            imagesource={{
              uri:
                "https://images.squarespace-cdn.com/content/v1/54b04776e4b0978f55a264b3/1592191774528-EDROC3VGMMQ69Z0BIX26/ke17ZwdGBToddI8pDm48kLcCyqm59C3feZHaRXjsmSF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmMzCLa7uFkdv2vMekBxfSUkxklzQQsKyEKCsoXqT_uq_OYcE9zvKwG2IPkTOl2cn5/vnyc-burger.png",
            }}
            title="Chicken hot Burger"
            info="A dish consisting of a flat round cake of minced beef, or sometimes another savoury ingredient, that is fried or grilled and served in a split bun or roll with various condiments and toppings."
            amount="23.00"
          />
          <Menulist
            imagesource={{
              uri:
                "https://images.squarespace-cdn.com/content/v1/54b04776e4b0978f55a264b3/1592191774528-EDROC3VGMMQ69Z0BIX26/ke17ZwdGBToddI8pDm48kLcCyqm59C3feZHaRXjsmSF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmMzCLa7uFkdv2vMekBxfSUkxklzQQsKyEKCsoXqT_uq_OYcE9zvKwG2IPkTOl2cn5/vnyc-burger.png",
            }}
            title="Chicken hot Burger"
            info="A dish consisting of a flat round cake of minced beef, or sometimes another savoury ingredient, that is fried or grilled and served in a split bun or roll with various condiments and toppings."
            amount="23.00"
          />
        </View>
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
  burgerlist: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
  },
});
export default Foodmenu;
