import { StyleSheet, Text, View,Button,TouchableOpacity,SafeAreaView } from 'react-native'
import React from 'react'
import Logo from '../components/logo/logo'
import Ionicons from "@expo/vector-icons/Ionicons"
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import { colors } from '../theme/colorTheme'
import Balance from '../components/balance/balance'
import Options from '../components/options/options'




const HomeScreen = ({navigation}) => {
  const navigate = navigation
  return (
   <SafeAreaView style={styles.container}>
    {/* Header */}
    <View style={styles.header}>
    <View style={styles.logoContainer}>
  <View style={styles.logo}>
  <Logo/>
  </View>
    </View>

    <View style={styles.headerIcons}>
    <MaterialIcons name='copyright' size={27} color={colors.primary_color} />
    <MaterialCommunityIcons name='line-scan' size={27} />
     <Ionicons name='ios-notifications-outline' size={27}  />
    
    </View>
    </View>

{/* Atm Card */}

<Balance/>

{/* BOXES */}

<Options navigate={navigate} />
   </SafeAreaView>

  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    width:'100%',
    // height:1000,
    flex:1,
    paddingTop:150,
    justifyContent:'flex-start',
    // alignItems:'center',
    // backgroundColor:'#F9F9F9',
    backgroundColor:"white"
  },

  header:{
    paddingTop:50,
    height:120 ,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    width:'100%',
    position:'absolute',
    // backgroundColor:'#F9F9F9',
    backgroundColor:"white",
    top:0
  },

  logoContainer:{
    flex:0.65,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:"flex-end",
  },
  logo:{
    paddingLeft:15
  },
  headerIcons:{
    flex: 0.35,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingRight:22
  }
})