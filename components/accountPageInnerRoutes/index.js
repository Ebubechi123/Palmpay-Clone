import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../../theme/colorTheme";
import { ArrowIcon } from "../icons/icons";
import { routeOptions } from "./routeOptions";
const AccountRouteOptions = () => {
  return (
    <View style={styles.container}>
      {routeOptions.map(({ title, icon, detail, id }) => (
        <TouchableOpacity style={styles.card} key={id}>
          <View style={styles.iconContainer}>{icon}</View>
          <View style={styles.textContainer}>
            <Text style={{ fontSize: 13, fontWeight: "600", paddingLeft: 9 }}>
              {title}
            </Text>
            <Text
              style={{
                fontSize: 10.4,
                fontWeight: "600",
                paddingLeft: 9,
                color: colors.primary_color,
                display: `${detail ? "flex" : "none"}`,
                paddingTop: 1.2,
              }}
            >
              {detail}
            </Text>
          </View>
          <View style={styles.iconContainer}>
            <ArrowIcon color={colors.inactiveColor} size={17} />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default AccountRouteOptions;

const styles = StyleSheet.create({
  container: {
    paddingTop: 22,
    paddingLeft: 25,
    paddingRight: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15.4,
    borderRadius: 13,
    backgroundColor: colors.lightPurple,
    marginBottom: 22,
  },
  iconContainer: {
    width: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "80%",
  },
});
