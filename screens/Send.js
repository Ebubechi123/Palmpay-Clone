import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import Speaker from '../components/speaker/speaker'
import PaymentTab from '../components/paymentTab/paymentTab'
import Beneficiaries from '../components/beneficiaries/beneficiaries'

const Send = () => {
  return (
    <ScrollView style={styles.container} >
      {/*  */}
      <Speaker/>
      <PaymentTab/>

      <Beneficiaries/>
    </ScrollView>
  )
}

export default Send

const styles = StyleSheet.create({
  container:{
    width:'100%',
    flex:1,
    paddingTop:20,
    // justifyContent:'flex-start',
    // backgroundColor:'#F9F9F9',
    backgroundColor:"white",
  },

})