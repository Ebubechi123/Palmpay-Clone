import { FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { colors } from "../../theme/colorTheme";

export const MobileNumberInput = ({ value,title,placeholder,mobileNo,setMobileNo }) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.label}>
          <Text style={styles.text}>{`${title ? title : 'Mobile number'}`}</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
          value={mobileNo}
          onChangeText={e=>setMobileNo(e)}
            style={styles.numberInput}
            placeholder={`${placeholder ? placeholder :'Enter mobile number'}`}
            autoFocus
            type={"number"}
            keyboardType="numeric"
            placeholderTextColor="lightgrey"
          />
          <View style={styles.icon}>
            <FontAwesome5
              name="address-book"
              size={26}
              color={colors.primary_color}
            />
          </View>
        </View>
        {/* Description */}
        <View style={styles.description}>
          <Text style={{ fontSize: 14, color: colors.inactiveColor }}>
            Select from contacts
          </Text>
        </View>
      </View>
    </>
  );
};

export const AmountInput = ({ value,Input,setInput }) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.label}>
          <Text style={styles.text}>Amount(N)</Text>
        </View>

        <View style={styles.amountInputContainer}>
          <TextInput
        value={Input}
          onChangeText={e=>setInput(e)}
            style={[styles.amountInput, styles.numberInput]}
            placeholder={"Enter amount"}
            type={"number"}
            keyboardType="numeric"
            placeholderTextColor="lightgrey"
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingLeft: 2,
    paddingRight: 2,
    alignItems: "flex-start",
    paddingTop: 12,
  },
  label: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
    color: colors.inactiveColor,
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingBottom: 8,
    borderBottomColor: colors.primary_color,
    borderBottomWidth: 0.4,
  },
  numberInput: {
    width: "90%",
    paddingTop: 5,
    color: "black",
    fontSize: 25,
  },
  icon: {
    width: "10%",
  },
  description: {
    marginTop: 6,
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  amountInputContainer: {
    marginTop: 4,
    borderColor: "lightgrey",
    borderWidth: 1.4,
    paddingTop: 10,
    paddingBottom: 14,
    paddingLeft: 9,
    width: "100%",
    borderRadius: 13,
  },
});
