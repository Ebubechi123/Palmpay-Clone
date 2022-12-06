import { StyleSheet, Text, View,TouchableOpacity } from "react-native";
import React from "react";
import { ArrowIcon } from "../icons/icons";
import { colors } from "../../theme/colorTheme";

const TransactionHistory = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.transactionContainer}>
        <View style={styles.row}>
          <Text style={{ fontWeight: "500", fontSize: 13 }}>Transaction History</Text>
          <ArrowIcon size={20} color={"lightgrey"}  />
        </View>

        <View style={styles.row2}>
          <Text style={{ fontWeight: "600", fontSize: 16 }}>-100.00</Text>
          <Text
            style={{
              fontWeight: "700",
              color: colors.inactiveColor,
              fontSize: 13,
            }}
          >
            01:06.May 24, 2022
          </Text>
        </View>
        <View style={styles.row2}>
          <Text
            style={{
              fontWeight: "600",
              fontSize: 12,
              color: colors.inactiveColor,
            }}
          >
            Top up Airtime
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TransactionHistory;

const styles = StyleSheet.create({
  container: {
    paddingTop: 22,
    paddingLeft: 25,
    paddingRight: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  transactionContainer: {
    width: "99%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    elevated: 1,
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 2.1,
    borderColor: "#f1f1f1",
    padding: 12,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 13,
  },
  row2: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 3,
  },
});
