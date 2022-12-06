import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { BeneficiariesData } from "./beneficiariesData";

const Logo = require("../../assets/image/logo2.jpg");

const List = ({ data }) => {
  return (
    <TouchableOpacity style={styles.list}>
      <View style={styles.imageContainer}>
        <Image
          source={Logo}
          resizeMode="contain"
          style={{ width: 50, height: 50 }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={{ fontSize: 16, color: "grey", fontWeight: "600" }}>
          {data?.name}
        </Text>
        <Text style={{ color: "silver", fontSize: 14, fontWeight: "500" }}>
          {data?.phoneNumber}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const ListContainer=()=>{
  const [data, setData] = useState(BeneficiariesData);
  return(
    <View style={styles.listContainer}>
        <FlatList
          showVerticalScrollIndicator={false}
          data={data}
          renderItem={({ item }) => <List data={item} />}
        />
      </View>
  )
}
const BeneficiaryList = () => {

  return (
    <View style={styles.container}>
      <View style={styles.recently}>
        <Text style={{ fontSize: 16, fontSize: 15, fontWeight: "600" }}>
          Recently
        </Text>
      </View>
      {/* List */}
      <ListContainer/>
    </View>
  );
};

export default BeneficiaryList;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  recently: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  listContainer: {
    paddingTop: 15,
  },
  list: {
    flex: 1,
    flexDirection: "row",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginBottom: 22,
  },
  imageContainer: {
    width: "20%",
  },
  textContainer: {
    width: "80%",
    alignItems: "flex-start",
    justifyContent: "center",
  },
});
