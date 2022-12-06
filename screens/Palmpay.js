import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Speaker from "../components/speaker/speaker";
import { AmountInput, MobileNumberInput } from "../components/input/inputs";
import AmountValueTabs from "../components/amountValueTabs";
import MeantFor from "../components/meantFor";
import NextSection from "../components/NextSection";

const Palmpay = () => {
  const [amountValue, setAmountValue] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [meantForValue, setMeantForValue] = useState("");
  const [Input, setInput] = useState("");
  return (
    <View style={styles.container}>
      <Speaker text={"Sending money between contacts is totally free."} />
      <View style={styles.inputContainer}>
        <MobileNumberInput mobileNo={mobileNo} setMobileNo={setMobileNo} />
        <AmountInput value={amountValue} Input={Input} setInput={setInput} />
        <AmountValueTabs
          setAmountValue={setAmountValue}
          setInput={setInput}
          amountValue={amountValue}
          Input={Input}
        />
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

export default Palmpay;

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
