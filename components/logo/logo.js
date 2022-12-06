const LogoImage = require("../../assets/image/logo2.jpg")
import {Image} from "react-native"

const Logo = () => {
    return ( 
        <Image source={LogoImage} resizeMode="contain" style={{width:50,height:50}} />
     );
}
 
export default Logo;