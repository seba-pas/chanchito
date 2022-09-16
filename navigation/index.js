import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Landing from "../components/Landing";
import Home from "../components/Home";
import ChanchiDetails from "../screens/ChanchiDetails";
import Chanchitos from "../screens/Chanchitos";

const Stack = createNativeStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Landing" component={Landing} options={{headerShown: false}}/>
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
      <Stack.Screen name="ChanchiDetails" component={ChanchiDetails} options={{headerShown: false}}/>
      <Stack.Screen name="Chanchitos" component={Chanchitos} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}
