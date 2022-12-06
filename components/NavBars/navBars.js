import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons/";
import React from "react";
import { colors } from "../../theme/colorTheme";
import { useNavigation } from "@react-navigation/native";
import Logo from "../logo/logo";
import { HeadsetIcon } from "../icons/icons";

const GoBack = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Ionicons name="arrow-back" size={28} color={colors.primary_color} />
    </TouchableOpacity>
  );
};
export const SendNav = ({ title, smallTitle, showSmallTitle }) => {
  return (
    <View style={styles.header}>
      {/* Icon */}
      <View style={styles.arrowIconContainer}>
        <GoBack />
      </View>
      {/* Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{`${title ? title : "Send Money"}`}</Text>
        {showSmallTitle === true && (
          <Text style={styles.history}>{`${
            smallTitle ? smallTitle : "History"
          }`}</Text>
        )}
        {showSmallTitle === false && null}
      </View>
    </View>
  );
};

export const AccountNav = () => {
  return (
    <View style={styles.header}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      {/* Name */}
      <View style={styles.nameContainer}>
        <View style={styles.name}>
          <Text style={{ fontSize: 19, fontWeight: "600" }}>Ebubechi</Text>
        </View>
        <View style={styles.info}>
          <View style={styles.tier}>
            <Text style={{ color: colors.inactiveColor }}>Tier 1</Text>
          </View>
          <View style={styles.earlyFund}>
            <View style={styles.icon}>
              <MaterialCommunityIcons
                name="shield-lock"
                size={21}
                color={colors.primary_color}
              />
            </View>
            <View style={styles.text}>
              <Text style={{ fontSize: 11.4, color: colors.inactiveColor }}>
                Early refund
              </Text>
            </View>
          </View>
        </View>
      </View>
      {/* Icons */}
      <View style={styles.iconContainer}>
        <HeadsetIcon size={26} />
        <Ionicons name="notifications-outline" size={26} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    // height:80,
    paddingTop: 60,
    paddingBottom: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    // backgroundColor:'#F9F9F9',
    backgroundColor: "white",
  },

  arrowIconContainer: {
    width: "10%",
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingLeft: 12,
  },
  titleContainer: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 23.4,
    fontWeight: "600",
    paddingLeft: 12,
  },
  history: {
    color: colors.primary_color,
    paddingRight: 29,
    fontSize: 17,
  },

  // Account header styles
  accountHeader: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 20,
  },
  logoContainer: {
    width: "10%",
  },
  nameContainer: {
    width: "60%",
    // alignItems:"flex-start",
    padding: 12,
  },
  iconContainer: {
    width: "20%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    // backgroundColor:"red",
  },

  name: {
    alignItems: "flex-start",
  },
  info: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  tier: {
    width: "20%",
  },

  earlyFund: {
    width: "45%",
    borderRadius: 15,
    backgroundColor: "lightgrey",
    padding: 1.5,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  icon: {
    width: "25%",
    alignItems: "flex-start",
  },

  text: {
    // justifyContent:"flex-start",
    // alignItems:"flex-start",
    width: "80%",
  },
});
