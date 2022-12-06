import { colors } from "../../theme/colorTheme";
import { AuthenticationIcon, BuildingIcon, CogIcon, CreditCardIcon, EnvelopeIcon, FAQIcon, HeadsetIcon, LocationIcon, UserIcon } from "../icons/icons";

export const routeOptions = [
  {
    title: "Banks And Cards",
    detail: "Get N150 rewards by adding fund using bank card",
    icon: <CreditCardIcon size={17} color={colors.inactiveColor} />,
    id: Math.random(),
  },
  {
    title: "My Profile",
    detail: "Extra Protection by adding Email address",
    icon: <UserIcon size={17} color={colors.inactiveColor}/> ,
    id: Math.random(),
  },
  {
    title: "Authentication",
    icon: <AuthenticationIcon size={17} color={colors.inactiveColor}/>,
    id: Math.random(),
  },
  {
    title: "Address Management",
    icon: <LocationIcon size={24}/>,
    id: Math.random(),
  },
  {
    title: "Help & Support",
    icon:<HeadsetIcon size={17} color={colors.inactiveColor}/>,
    id: Math.random(),
  },
  {
    title: "FAQs",
    icon: <FAQIcon size={17} color={colors.inactiveColor}/> ,
    id: Math.random(),
  },
  {
    title: "Friends",
    icon: <UserIcon size={17} color={colors.inactiveColor} /> ,
    id: Math.random(),
  },
  {
    title: "PalmPay Official",
    detail: "Follow us on social media",
    icon: <BuildingIcon size={17} color={colors.inactiveColor}/>,
    id: Math.random(),
  },
  {
    title: "Invitation",
    detail: "You and your friends both earn rewards",
    icon: <EnvelopeIcon  size={17} color={colors.inactiveColor}/> ,
    id: Math.random(),
  },
  {
    title: "Settings",

    icon: <CogIcon size={17} color={colors.inactiveColor}/>,
    id: Math.random(),
  },
];
