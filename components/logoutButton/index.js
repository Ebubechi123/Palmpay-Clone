import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../../theme/colorTheme";

const LogoutButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text
          style={{
            color: colors.primary_color,
            fontSize: 14,
            fontWeight: "700",
          }}
        >
          Log Out
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LogoutButton;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 25,
    paddingRight: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 21,
  },
  button: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 15.4,
    borderRadius: 13,
    backgroundColor: colors.lightPurple,
    marginBottom: 22,
  },
});
