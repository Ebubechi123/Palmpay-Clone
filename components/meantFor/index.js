import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { colors } from "../../theme/colorTheme";

const MeantFor = ({meantForValue,setMeantForValue}) => {
  const options = ["Family", "Friend", "Donation", "Other"];
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>What's it for? (opt)</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          value={meantForValue}
          style={styles.input}
          keyboardType={"default"}
        />
      </View>

      <View style={styles.boxContainer}>
        {options.map((value, index) => (
          <TouchableOpacity
            onPress={() => {
              setMeantForValue(value);
            }}
            key={index}
            style={styles.box}
          >
            <Text style={{ color: colors.inactiveColor, fontWeight: "600" }}>
              {value}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default MeantFor;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingLeft: 2,
    paddingRight: 2,
    alignItems: "flex-start",
    paddingTop: 12,
  },
  labelContainer: {
    marginTop: 19,
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  label: {
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
    borderBottomColor: "lightgrey",
    borderBottomWidth: 2,
    height: 29,
  },
  input: {
    width: "100%",
    color: "black",
    fontSize: 15,
  },
  boxContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 11,
  },
  box: {
    marginRight: 8,
    flexBasis: "20%",
    borderColor: "lightgrey",
    borderWidth: 1.9,
    padding: 5,
    borderRadius: 5,
    alignItems: "center",
  },
});
