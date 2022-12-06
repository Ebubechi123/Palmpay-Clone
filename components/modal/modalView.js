import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ErrorIcon, SuccessIcon } from "../icons/icons";
import { colors } from "../../theme/colorTheme";
import { useNavigation } from "@react-navigation/native";

const ModalView = ({ message, iconStatus }) => {
  const navigation = useNavigation();
  return (
    <View
      style={styles.container}
      onPress={() => {
        setOpenModal(false);
      }}
    >
      <View style={styles.card}>
        {iconStatus === "error" && <ErrorIcon size={65} color={"red"} />}
        {iconStatus === "success" && <SuccessIcon size={85} color={"green"} />}

        <Text style={{ fontSize: 20, paddingTop: 22, fontWeight: "700" }}>
          {message.title}
        </Text>
        <Text style={{ fontSize: 15, fontWeight: "400", paddingTop: 7 }}>
          {message.details}
        </Text>
        {iconStatus !== "error" && (
          <Text
            style={{
              fontSize: 15,
              fontWeight: "600",
              paddingTop: 12,
              color: colors.inactiveColor,
            }}
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            Go to Home
          </Text>
        )}
      </View>
    </View>
  );
};

export default ModalView;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "red",
    top: 0,
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 99,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  card: {
    width: "87%",
    backgroundColor: "white",
    borderRadius: 5,
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
