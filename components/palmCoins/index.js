import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { palmCoinData } from "./palmCoinData";
import { ArrowIcon } from "../icons/icons";
import { colors } from "../../theme/colorTheme";

const PalmCoins = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        {palmCoinData.map(({ title, img, dataNo }) => (
          <TouchableOpacity key={title} style={styles.card}>
            {/* Column 1 */}
            <View style={styles.column1}>
              <Image
                source={img}
                resizeMode={"contain"}
                style={{ width: 70, height: 70 }}
              />
              <Text style={{ fontSize: 12, fontWeight: "600" }}>{title}</Text>
              <Text style={{ fontSize: 12, marginTop: 20, fontWeight: "700" }}>
                {dataNo}
              </Text>
            </View>

            {/* Column 2 */}
            <View style={styles.column2}>
              <ArrowIcon color={colors.primary_color} />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default PalmCoins;

const styles = StyleSheet.create({
  container: {
    paddingTop: 22,
    paddingLeft: 25,
    paddingRight: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    width: "99%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  card: {
    flexBasis: "33.2%",
    elevated: 1,
    marginRight: 2,
    marginLeft: 2,
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 2.2,
    borderColor: "#f1f1f1",
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  },
  column1: {
    alignItems: "flex-start",
    flexBasis: "80%",
  },
  column2: {
    flexBasis: "20%",
  },
});
