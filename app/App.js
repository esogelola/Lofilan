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
import {createDrawerNavigator} from '@react-navigation/drawer';

import SplashScreen from './components/SplashScreen';
import CommunityStackScreen from './components/stacks/CommunityStackScreen';
import MarketplaceHome from './screens/MarketplaceHome';
import Messages from './screens/Messages';
import Settings from './screens/Settings';
import SignInScreen from './screens/SignIn';
import SignUpScreen from './screens/SignUp';
import ForgotScreen from './screens/Forgot';

import useAuth from './hooks/useAuth';
import UserContext from './contexts/UserContext';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
export default function App() {
  const [isInitializing, user, setUser] = useAuth();

  if (isInitializing) {
    return <SplashScreen />;
  }
  return (
    <UserContext.Provider value={{isInitializing, user, setUser}}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          {user == null ? (
            <Stack.Navigator>
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
            </Stack.Navigator>
          ) : (
            <Drawer.Navigator initialRouteName="Home">
              <Drawer.Screen
                name="Community"
                component={CommunityStackScreen}
              />
              <Drawer.Screen name="Marketplace" component={MarketplaceHome} />
              <Drawer.Screen name="Messages" component={Messages} />
              <Drawer.Screen name="Settings" component={Settings} />
            </Drawer.Navigator>
          )}
        </NavigationContainer>
      </PaperProvider>
    </UserContext.Provider>
  );
}
