/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import theme from './styles/paperTheme.style';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from './components/SplashScreen';
import HomeScreen from './pages/Home';
import SignInScreen from './pages/SignIn';
import SignUpScreen from './pages/SignUp';
import ForgotScreen from './pages/Forgot';

import useAuth from './hooks/useAuth';
import UserContext from './contexts/UserContext';

const Stack = createStackNavigator();

export default function App() {
  const [isInitializing, user, setUser] = useAuth();

  if (isInitializing) {
    return <SplashScreen />;
  }
  return (
    <UserContext.Provider value={{isInitializing, user, setUser}}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator>
            {user == null ? (
              <>
                <Stack.Screen
                  name="SignIn"
                  component={SignInScreen}
                  options={{
                    headerShown: false,
                    // When logging out, a pop animation feels intuitive
                    // You can remove this if you want the default 'push' animation
                    animationTypeForReplace: false ? 'pop' : 'push',
                  }}
                />
                <Stack.Screen
                  name="SignUp"
                  component={SignUpScreen}
                  options={{
                    headerShown: false,
                    // When logging out, a pop animation feels intuitive
                    // You can remove this if you want the default 'push' animation
                    animationTypeForReplace: false ? 'pop' : 'push',
                  }}
                />
                <Stack.Screen
                  name="Forgot"
                  component={ForgotScreen}
                  options={{
                    headerShown: false,
                    // When logging out, a pop animation feels intuitive
                    // You can remove this if you want the default 'push' animation
                    animationTypeForReplace: false ? 'pop' : 'push',
                  }}
                />
              </>
            ) : (
              <Stack.Screen name="Home" component={HomeScreen} />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </UserContext.Provider>
  );
}
