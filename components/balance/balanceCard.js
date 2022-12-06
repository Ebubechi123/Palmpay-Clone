import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../../theme/colorTheme";
import { DatabaseIcon, EyeIcon, RefreshIcon, WalletIcon } from "../icons/icons";
import { AccountBalance } from "../../stateManagement/context/accountBalanceContext";

const BalanceCard = () => {
  const [accountBalance] = AccountBalance();
  const tabItems = [
    {
      name: "Fund",
      icon: <WalletIcon color={colors.primary_color} size={18} />,
    },
    {
      name: "Withdraw",
      icon: <DatabaseIcon color={colors.primary_color} size={18} />,
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Available Balance */}
        <View style={styles.availableBalanceRow}>
          <Text style={{ color: "silver", marginRight: 9, fontSize: 13 }}>
            Available Balance
          </Text>
          <EyeIcon color={"white"} size={18} />
        </View>

        {/* Balance */}

        <View style={styles.balanceRow}>
          <Text style={{ fontSize: 22, color: "white" }}>
            N {accountBalance}
          </Text>
          <TouchableOpacity>
            <RefreshIcon size={20} color="white" />
          </TouchableOpacity>
        </View>

        {/* Tab */}

        <View style={styles.tabContainer}>
          <View style={styles.tab}>
            {tabItems.map(({ name, icon }) => (
              <View key={name} style={styles.tabBox}>
                <View style={styles.iconBox}>{icon}</View>
                <Text style={{ fontSize: 13, fontWeight: "600" }}>{name}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

export default BalanceCard;

const styles = StyleSheet.create({
  container: {
    paddingTop: 1,
    paddingLeft: 25,
    paddingRight: 25,
  },
  card: {
    padding: 18,
    width: "100%",
    backgroundColor: colors.primary_color,
    borderRadius: 23,
  },
  availableBalanceRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  balanceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
  },
  tabContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 11,
  },
  tab: {
    width: "99%",
    padding: 4,
    backgroundColor: "white",
    borderRadius: 13,
    flexDirection: "row",
  },
  tabBox: {
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    padding: 2,
    borderRight: 2,
    borderColor: "lightgrey",
    borderRightWidth: 0.4,
    paddingTop: 5,
    paddingBottom: 5,
  },
  iconBox: {
    padding: 12,
    backgroundColor: colors.lightPurple,
    borderRadius: 10,
  },
});
