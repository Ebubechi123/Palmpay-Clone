import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../theme/colorTheme";
import { FontAwesome5 } from "@expo/vector-icons";
const Speaker = ({ text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.speaker}>
        <View style={styles.iconContainer}>
          <FontAwesome5
            name="microphone"
            size={20}
            color={colors.primary_color}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            {`${text ? text : "90+ Free Bank Transfers every month."}`}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Speaker;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  speaker: {
    width: "95%",
    backgroundColor: colors.lightPurple,
    padding: 15,
    borderRadius: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    width: "10%",
  },
  textContainer: {
    width: "90%",
    justifyContent: "flex-start",
  },
  text: {
    color: colors.primary_color,
    fontSize: 14.1,
    fontWeight: "500",
  },
});
