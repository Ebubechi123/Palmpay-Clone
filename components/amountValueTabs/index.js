import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const AmountValueTabs = ({ amountValue, setAmountValue,setInput }) => {
  const values = ['50', '200', '500', '1000'];
  return (
    <View style={styles.container}>
      {values.map((value,index) => (
        <TouchableOpacity key={index} onPress={()=>{setInput(value)}} style={styles.box}>
          <Text style={styles.text}>{value}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default AmountValueTabs;

const styles = StyleSheet.create({
  container: {
    marginTop: 11,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap",
  },
  box: {
    flexBasis: "23%",
    borderRadius: 13,
    borderColor: "lightgrey",
    borderWidth: 1.4,
    padding: 17,
    alignItems: "center",
  },
  text: {
    fontSize: 21,
  },
});
