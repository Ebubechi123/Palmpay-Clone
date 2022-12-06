import FontAwesome5 from "@expo/vector-icons/FontAwesome5"
import { Entypo, EvilIcons, Ionicons, MaterialCommunityIcons, Octicons } from "@expo/vector-icons"
import MaterialIcons from '@expo/vector-icons/MaterialIcons'


export const FinanceIcon =({color,size})=>{
    return(
        <FontAwesome5 color={color} size={size} name="money-bill" />
    )
}
export const ArrowIcon =({color,size})=>{
    return(
        <Ionicons color={color} size={size} name="md-chevron-forward-outline" />
    )
}

export const EyeIcon =({color,size,style})=>{
    return(
        <MaterialIcons name='remove-red-eye' style={style} color={color} size={size} />
    )
}
export const RefreshIcon =({color,size,style})=>{
    return(
        <MaterialIcons name='refresh' style={style} color={color} size={size} />
    )
}
export const WalletIcon =({color,size,style})=>{
    return(
        <MaterialIcons name='account-balance-wallet' style={style} color={color} size={size} />
    )
}
export const DatabaseIcon =({color,size,style})=>{
    return(
        <Entypo name='database' style={style} color={color} size={size} />
    )
}
// export const HomeIcon =({color,size})=>{
//     return(
//         <AntDesign color={color} size={size} name="home" />
//     )
// }
// export const RewardIcon =({color,size})=>{
//     return(
//         <FontAwesome5 color={color} size={size} name="gift" />
//     )
// }
export const UserIcon =({color,size,style})=>{
    return(
        <FontAwesome5 color={color} size={size} name="user" />
    )
}
export const CreditCardIcon =({color,size,style})=>{
    return(
        <Octicons color={color} size={size} name="credit-card" style={style} />
    )
}
export const AuthenticationIcon =({color,size,style})=>{
    return(
        <Octicons color={color} size={size} name="shield-check" style={style} />
    )
}
export const LocationIcon =({color,size,style})=>{
    return(
        <EvilIcons color={color} size={size} name="location" style={style} />
    )
}
export const FAQIcon =({color,size,style})=>{
    return(
        <FontAwesome5 color={color} size={size} name="question-circle" style={style} />
    )
}
export const CogIcon =({color,size,style})=>{
    return(
        <FontAwesome5 color={color} size={size} name="cog" style={style} />
    )
}
export const OfficeIcon =({color,size,style})=>{
    return(
        <FontAwesome5 color={color} size={size} name="cog" style={style} />
    )
}
export const HeadsetIcon =({color,size,style})=>{
    return(
        <MaterialCommunityIcons name="headset" size={size}  color={color} style={style}/>
    )
}
export const EnvelopeIcon =({color,size,style})=>{
    return(
        <FontAwesome5 name="envelope" size={size}  color={color} style={style}/>
    )
}
export const BuildingIcon =({color,size,style})=>{
    return(
        <FontAwesome5 name="building" size={size}  color={color} style={style}/>
    )
}
export const SuccessIcon =({color,size,style})=>{
    return(
        <Ionicons name="ios-checkmark-circle-sharp" size={size}  color={color} style={style}/>
    )
}
export const ErrorIcon =({color,size,style})=>{
    return(
        <Entypo name="circle-with-cross" size={size}  color={color} style={style}/>
    )
}



// Money Bill FA5
// gift FA5
// user Ant
// home Ant