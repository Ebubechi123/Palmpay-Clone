import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import TabNavigation from './tabNavigation';
import StackNavigation from './stackNavigation';
import { View } from "react-native"
const Navigation = () => {
    return ( 
        <>
  {/* <View>
    
  <StackNavigation/>
  </View> */}
            <TabNavigation/>

        </>
     );
}
 
export default Navigation;