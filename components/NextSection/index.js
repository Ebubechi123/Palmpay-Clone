import { StyleSheet, Text, View, TouchableOpacity, Modal } from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "../../theme/colorTheme";
import { AccountBalance } from "../../stateManagement/context/accountBalanceContext";
import ModalView from "../modal/modalView";

const NextSection = ({
  amountValue,
  mobileNo,
  meantForValue,
  Input,
  setInput,
  setAmountValue,
  setMobileNo,
  setMeantForValue,
}) => {
  const [accountBalance, setAccounBalance] = AccountBalance();
  const [openModal, setOpenModal] = useState(false);
  const [btnActive, setBtnctive] = useState(false);
  const [message, setMessage] = useState();
  const [iconStatus, setIconStatus] = useState("");

  useEffect(() => {
    if (meantForValue !== "") {
      setBtnctive(true);
    } else {
      setBtnctive(false);
    }
  }, [amountValue, mobileNo, meantForValue, Input]);
  const PaymentHandler = () => {
    if (Input === "" || mobileNo === "" || meantForValue === "") {
      setOpenModal(true);
      setMessage({
        title: "Transaction Error",
        details: "Please Fill Input Fields",
      });
      setIconStatus("error");
    } else if (accountBalance < amountValue) {
      setOpenModal(true);
      setMessage({ title: "Transaction Error", details: "Insufficient Funds" });
      setIconStatus("error");
    } else if (accountBalance > amountValue) {
      setAccounBalance((prev) => prev - Input);
      setMessage({
        title: "Transaction Successful",
        details: "Money on its way to recipient",
      });
      setIconStatus("success");
      setOpenModal(true);
      setInput("");
      setAmountValue("");
      setMeantForValue("");
      setMobileNo("");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Please confirm transfer details are correct
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={[
            styles.btn,
            [btnActive ? styles.btnActive : styles.btnInActive],
          ]}
          onPress={btnActive ? PaymentHandler : null}
        >
          <Text style={styles.btnTxt}>Next</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={openModal}
        onRequestClose={() => {
          setOpenModal(!openModal);
        }}
      >
        <ModalView
          message={message}
          iconStatus={iconStatus}
          setOpenModal={setOpenModal}
        />
      </Modal>
    </View>
  );
};

export default NextSection;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "107%",
    bottom: -190,
    padding: 23,
  },
  textContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  text: {
    color: colors.inactiveColor,
    fontSize: 15,
    fontWeight: "600",
  },
  btnContainer: {
    width: "100%",
  },
  btn: {
    padding: 18,
    width: "100%",
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  btnActive: {
    backgroundColor: colors.primary_color,
  },
  btnInActive: {
    backgroundColor: "lightgrey",
  },
  btnTxt: {
    fontSize: 19,
    color: "white",
    fontWeight: "600",
  },
});
