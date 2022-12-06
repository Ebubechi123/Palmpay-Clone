import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
const DataImage = require('../../assets/image/data.png')
const MoneyImage = require('../../assets/image/sendMoney.png')
const TvImage = require('../../assets/image/tv.png')
const airtimeImage = require('../../assets/image/airtime.png')
const groupDiscountImage = require('../../assets/image/groupDiscount.png')
import { useNavigation } from "@react-navigation/native";
import React from 'react'


const Options = () => {
    const optionsList =[
        {
            name:'Send Money',
            icon:MoneyImage,
            path:'Send'
        },
        {
            name:'Data Bundle',
            icon:DataImage,
            path:'Home'
        },
        {
            name:'Airtime',
            icon:airtimeImage,
            path:'Home'
        },
        {
            name:'Tv',
            icon:TvImage,
            path:'Home'
        },
        {
            name:'Group Discount',
            icon:groupDiscountImage,
            path:'Home'
        },
    ]
    const navigation= useNavigation()
  return (
    <View style={styles.container} >
   <View style={styles.boxContainer}>
   {optionsList.map(({name,icon,path})=>(
            <TouchableOpacity key={name} onPress={()=>{navigation.navigate(path)}} style={styles.box} >
          <Image source={icon} resizeMode="contain" style={{width:65,height:65}} />
          <Text style={styles.text}>
            {name}
          </Text>
            </TouchableOpacity>
    ))}
   </View>
    </View>
  )
}

export default Options

const styles = StyleSheet.create({
    container:{
        marginTop:10,
        paddingTop:15,
        marginRight:5,
        marginLeft:5,
        width:'100%',
        alignItems:"center"
    },
    boxContainer:{
        width: '95%',
        flexDirection:"row",
        justifyContent:'flex-start',
        gap:42,
        alignItems:"center",
        flexWrap:'wrap',
    },
    box:{
        alignItems:'center',
        flexBasis:'25%',
        lineHeight:'30px',
        marginBottom:18,
        justifyContent:'center',
        // backgroundColor:'blue'
     
    },
    text:{
        marginTop:12,
        fontSize:13,
        color:'#010101',
        fontWeight:'600',
        alignSelf:'center'
      
    }
})