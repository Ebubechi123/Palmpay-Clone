import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { colors } from "../../theme/colorTheme";
import { AntDesign } from "@expo/vector-icons";

const RecipientMobileNo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Recipient mobile no (opt)</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput style={styles.input} keyboardType={"numeric"} />

        <View style={styles.iconContainer}>
          <AntDesign name="contacts" size={26} color={colors.primary_color} />
        </View>
      </View>
    </View>
  );
};

export default RecipientMobileNo;

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
    height: 31,
  },
  input: {
    width: "90%",
    color: "black",
    fontSize: 15,
  },
  iconContainer: {
    width: "10%",
  },
});
