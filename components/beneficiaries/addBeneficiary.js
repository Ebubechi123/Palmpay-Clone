import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../../theme/colorTheme";
import { AntDesign } from "@expo/vector-icons";

const AddBeneficiary = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {/* Icon */}
        <View style={styles.iconContainer}>
          <View style={styles.icon}>
            <AntDesign
              name="adduser"
              size={22}
              color={colors.primary_color}
              style={{ fontWeight: "700" }}
            />
          </View>
        </View>

        {/* Text */}
        <View style={styles.textContainer}>
          <Text style={{ fontSize: 21,  fontWeight: "700" }}>
            Add Beneficiaries
          </Text>
        </View>
        {/* Add Button */}
        <View style={styles.addButtonContainer}>
          <TouchableOpacity style={styles.addButton}>
            <Text style={{ color: "lightgrey", textAlign: "center" }}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AddBeneficiary;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 2,
  },
  iconContainer: {
    width: "20%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  icon: {
    borderRadius: 50,
    padding: 16,

    backgroundColor: colors.lightPurple,
  },
  textContainer: {
    width: "60%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 5,
  },
  addButtonContainer: {
    width: "20%",
  },
  addButton: {
    width: "90%",
    borderRadius: 12,
    backgroundColor: colors.primary_color,
    fontSize: 15,
    padding: 4,
    textAlign: "center",
  },
});
