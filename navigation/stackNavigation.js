import { SendNav } from "../components/NavBars/navBars";
import BankAccount from "../screens/BankAccount";
import Palmpay from "../screens/Palmpay";
import Send from "../screens/Send";
import TabNavigation from "./tabNavigation";
import { createStackNavigator } from "@react-navigation/stack";

const StackNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          options={{ headerShown: false }}
          component={TabNavigation}
        />
        <Stack.Screen
          name="Send"
          component={Send}
          options={{ header: () => <SendNav /> }}
        />
        <Stack.Screen
          name="Palmpay"
          component={Palmpay}
          options={{
            header: () => (
              <SendNav title={"To Palmpay"} showSmallTitle={false} />
            ),
          }}
        />
        <Stack.Screen name="BankAccount" component={BankAccount}  options={{
            header: () => (
              <SendNav title={"To Bank Account "} showSmallTitle={false} />
            ),
          }} />
      </Stack.Navigator>
    </>
  );
};

export default StackNavigation;
