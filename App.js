import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FinalRegistration, LoginScreen, Bookings, RegisterScreen, UserType, Verification, Inbox, Wallet, Profile, HomeScreen, ShowMessage } from './screens';
import {
  useFonts,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from '@expo-google-fonts/roboto';
import { ParamsProvider, RegisterProvider } from './context';

const Stack = createNativeStackNavigator();

export default function App() {

   const [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
  });

  if (!fontsLoaded) {
    return null;
  }else{

    return (
      <>

        <RegisterProvider>
          <ParamsProvider>
            <StatusBar style='auto' backgroundColor="white" />
            <NavigationContainer>
              <Stack.Navigator 
              screenOptions={{
                headerShown: false
              }}>


                <Stack.Screen
                  name="Home"
                  component={HomeScreen}
                  initialParams={{ active: "Home" }}
                />
                
                <Stack.Screen
                  name="Bookings"
                  component={Bookings}
                  initialParams={{active: "Bookings"}}
                />

                <Stack.Screen
                  name="ShowMessage"
                  component={ShowMessage}
                  initialParams={{ active: "ShowMessage" }}
                />

                <Stack.Screen
                  name="Inbox"
                  component={Inbox}
                  initialParams={{ active: "Inbox" }}
                />

                <Stack.Screen
                  name="Wallet"
                  component={Wallet}
                  initialParams={{ active: "Wallet" }}
                />

                <Stack.Screen
                  name="Profile"
                  component={Profile}
                  initialParams={{ active: "Profile" }}
                />


                <Stack.Screen
                  name="Login"
                  component={LoginScreen}
                />

                <Stack.Screen
                  name="UserType"
                  component={UserType}
                />

                <Stack.Screen
                  name="Register"
                  component={RegisterScreen}
                />

                <Stack.Screen
                  name="Verification"
                  component={Verification}
                />
                
                <Stack.Screen
                  name="FinalRegistration"
                  component={FinalRegistration}
                />


                {/* <Stack.Screen
                  name="FinalRegistration"
                  component={FinalRegistration}
                /> */}

              </Stack.Navigator>
            </NavigationContainer>
          </ParamsProvider>
        </RegisterProvider>
      </>
    );
  }


};
