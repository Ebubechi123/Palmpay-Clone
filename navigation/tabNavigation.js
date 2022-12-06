import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Account from "../screens/Account";
import HomeScreen from "../screens/HomeScreen";
import { colors } from "../theme/colorTheme";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { SendNav } from "../components/NavBars/navBars";

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 55,
            paddingTop: 9,
            paddingBottom: 5,
          },
        }}
        tabBarOptions={{
          labelStyle: { fontSize: 13 },
          activeTintColor: `${colors.primary_color}`,
          inactiveTintColor: `${colors.inactiveColor}`,
        }}
      >
        <Tab.Screen
          name="Home"
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign color={color} size={19} name="home" />
            ),
          }}
          component={HomeScreen}
        />
        <Tab.Screen
          name="Finance"
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 color={color} size={19} name="money-bill" />
            ),
          }}
          component={HomeScreen}
        />
        <Tab.Screen
          name="Reward"
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 color={color} size={19} name="gift" />
            ),
          }}
          component={HomeScreen}
        />
        <Tab.Screen
          name="Me"
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 color={color} size={19} name="user" />
            ),
            tabBarheader:()=>{
              <SendNav title={"To Palmpay"} showSmallTitle={false} />
            },
          }}
          component={Account}
        />
      </Tab.Navigator>
    </>
  );
};

export default TabNavigation;
