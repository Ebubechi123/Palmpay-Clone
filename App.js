import { StatusBar } from "expo-status-bar";
import { StyleSheet} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./navigation/stackNavigation";
import { AccountBalanceProvider } from "./stateManagement/context/accountBalanceContext";

export default function App() {
  return (
    <>
    <AccountBalanceProvider>
    <NavigationContainer>
        <StackNavigation />
        <StatusBar translucent />
      </NavigationContainer>
    </AccountBalanceProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// Money Bill FA5
// gift FA5
// user Ant
// home Ant
