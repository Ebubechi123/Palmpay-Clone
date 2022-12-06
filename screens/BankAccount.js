import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Speaker from "../components/speaker/speaker";
import { AmountInput, MobileNumberInput } from "../components/input/inputs";
import MeantFor from "../components/meantFor";
import NextSection from "../components/NextSection";
import RecipientMobileNo from "../components/recipientMobile";

const BankAccount = () => {
  const [amountValue, setAmountValue] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [meantForValue, setMeantForValue] = useState("");
  const [Input, setInput] = useState("");
  return (
    <View style={styles.container}>
      <Speaker text={"Sending money between contacts is totally free."} />
      <View style={styles.inputContainer}>
        <MobileNumberInput
          title={"Bank account number"}
          placeholder={"Bank account number"}
          mobileNo={mobileNo}
          setMobileNo={setMobileNo}
        />
        <AmountInput value={amountValue} Input={Input} setInput={setInput} />
        <RecipientMobileNo />
        <MeantFor
          meantForValue={meantForValue}
          setMeantForValue={setMeantForValue}
        />
        <NextSection
          amountValue={amountValue}
          mobileNo={mobileNo}
          meantForValue={meantForValue}
          Input={Input}
          setAmountValue={setAmountValue}
          setInput={setInput}
          setMeantForValue={setMeantForValue}
          setMobileNo={setMobileNo}
        />
      </View>
    </View>
  );
};

export default BankAccount;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    flex: 1,
    paddingTop: 1,
    backgroundColor: "white",
  },
  inputContainer: {
    padding: 12,
  },
});
