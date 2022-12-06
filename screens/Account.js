import { StyleSheet, ScrollView } from "react-native";
import React from "react";
import { AccountNav } from "../components/NavBars/navBars";
import BalanceCard from "../components/balance/balanceCard";
import PalmCoins from "../components/palmCoins";
import TransactionHistory from "../components/transactionHistory/transactionHistory";
import AccountRouteOptions from "../components/accountPageInnerRoutes";
import LogoutButton from "../components/logoutButton";

const Account = () => {
  return (
    <ScrollView style={styles.container}>
      <AccountNav />
      <BalanceCard />
      <PalmCoins />
      <TransactionHistory />
      <AccountRouteOptions/>
      <LogoutButton/>
    </ScrollView>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "white",
  },
});
