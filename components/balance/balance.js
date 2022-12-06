import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../../theme/colorTheme";
import { EyeIcon, RefreshIcon } from "../icons/icons";
import { AccountBalance } from "../../stateManagement/context/accountBalanceContext";

const Balance = () => {
  const [accountBalance] = AccountBalance();
  return (
    <View style={styles.container}>
      {/* BALANCE */}
      <View style={styles.balanceContainer}>
        <RefreshIcon
          name="refresh"
          style={styles.icon}
          color={colors.primary_color}
        />
        <Text style={styles.text}>Balance N{accountBalance}</Text>
        <EyeIcon style={styles.icon} />
      </View>

      {/* FUND BUTTON */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonTxt}>Fund</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Balance;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    padding: 15,
  },
  balanceContainer: {
    width: "50%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  buttonContainer: {
    width: "50%",
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  button: {
    borderStyle: "solid",
    borderWidth: 1,
    width: 90,
    padding: 5,
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    borderColor: colors.primary_color,
  },
  buttonTxt: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.primary_color,
  },

  text: {
    fontSize: 16,
    fontWeight: "700",
  },
  icon: {
    fontSize: 22,
  },
});
