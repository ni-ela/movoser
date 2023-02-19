import { NavigationContainer } from '@react-navigation/native';
import { Logon, Signup, Splash } from './src/view/screens/index';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from 'styled-components';
import themes from './src/view/styles/themes';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import useFonts from './assets/fonts/fonts';
import { useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';

const Stack = createNativeStackNavigator();
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const LoadFonts = async () => {
    await useFonts();
  };

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={(error) => console.log(error)}
      />
    );
  }
  
  /* useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await LoadFonts();
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []); */

  return (
    <ThemeProvider theme={themes.light} >
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName='Login'
          screenOptions={{
            headerTitle: ""
          }}>
            <Stack.Screen options={{headerShown: false}} name="Login">
              {(props) => <Logon {...props}  />}  
            </Stack.Screen>
            <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
