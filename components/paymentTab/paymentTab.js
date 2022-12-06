import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import React from 'react'

const PaymentTab = () => {
    const navigation = useNavigation()
    const Tab=[
        {
            title:'To PalmPay',
            color:'#c682e8',
            icon:'mobile',
            path:'Palmpay'
        },
        {
            title:'To Bank Account',
            color:'#425df5',
            icon:'bank',
            path:'BankAccount'
        },
    ]
  return (
    <View style={styles.container}>
        <View style={styles.paymentTabContainer}>
        {Tab.map(({title,icon,color,path},index)=>{
            return (
                <TouchableOpacity onPress={()=>{navigation.navigate(path)}} key={index} style={[styles.tab,{backgroundColor:color}]} >
                    <View  >
                        <FontAwesome name={icon} size={47} color={'white'} />
                    </View>
                    <Text style={styles.title} >{title}</Text>
                </TouchableOpacity >

            )
        })}
        </View>
    
    </View>
  )
}

export default PaymentTab

const styles = StyleSheet.create({
    container:{
        marginTop:30,
        width:'100%',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    paymentTabContainer:{
        width: '95%',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },

    tab:{
        flexBasis:'45%',
        padding:20,
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        // :`${({bg})=>bg ? bg :''}`
        // backgroundColor:'purple',
        borderRadius:12
    },
    title:{
        color:'white',
        fontSize:15,
        marginTop:15
    }
})

