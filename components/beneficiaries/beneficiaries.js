import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '../../theme/colorTheme'
import AddBeneficiary from './addBeneficiary';
import BeneficiaryList from './beneficiaryList';

const Beneficiaries = () => {
  return (
    <View style={styles.container} > 
      <View style={[styles.beneficiariesContainer,styles.shadow]}>
        {/* Header */}
        <View style={styles.beneficiariesHeader}>
        <Text style={{fontSize:21, fontWeight:'700'}} >Beneficiaries</Text>
        <Text style={{color:colors.primary_color,fontWeight:'600',fontSize:18}} >All
        <Ionicons  size={18} name='chevron-forward'/>
         </Text>
        </View>
        {/* Add Beneficiary */}
        <AddBeneficiary/>

        {/* Beneficiary List */}
        <BeneficiaryList/>
      </View>
    </View>
  )
}

export default Beneficiaries

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        marginTop:30,

    },

    beneficiariesContainer:{
        width: "90%",
        marginTop:90,
        marginBottom:35,
        borderRadius:12,
        // boxShadow: '0 1px 2px 0 rgb(0 0 0 / 15%)'
    },
    shadow:{
        // elevation:.01,
        // shadowColor:'#171717',
        // shadowOffset:{width:-2, height:4},
        // shadowOpacity:0.2,
        // shadowRadius:3
        borderColor:'lightgrey',
        borderWidth:1
    },
    beneficiariesHeader:{
        padding:20,
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:'center',
        backgroundColor:colors.lightPurple,
        borderTopLeftRadius:12,
        borderTopRightRadius:12
    },
})