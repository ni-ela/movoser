import { NavigationContainer } from '@react-navigation/native';
import { Logon, Signup, Splash } from './src/view/screens/index';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerTitle: ""
        }}>
        {/* <Stack.Screen options={{headerShown: false}} name="Splash" component={Splash}/> */}
        <Stack.Screen options={{headerShown: false}} name="Login">
          {(props) => <Logon {...props}  />}  
        </Stack.Screen>
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
