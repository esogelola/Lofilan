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
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import SplashScreen from './components/SplashScreen';
import CommunityStackScreen from './components/stacks/CommunityStackScreen';
import MarketplaceHome from './screens/MarketplaceHome';
import Messages from './screens/Messages';
import ChatScreen from './screens/ChatScreen';
import Settings from './screens/Settings';
import SignInScreen from './screens/SignIn';
import SignUpScreen from './screens/SignUp';
import ForgotScreen from './screens/Forgot';

import useAuth from './hooks/useAuth';
import UserContext from './contexts/UserContext';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const MessageStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen name="Messages" component={Messages} />
    <Stack.Screen
      name="Chat"
      component={ChatScreen}
      options={({route}) => ({
        title: route.params.userName,
        headerBackTitleVisible: false,
      })}
    />
  </Stack.Navigator>
);
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
            
            <Tab.Navigator  tabBarOptions={{
              showLabel: false,
              activeTintColor: '#F85F6A',
              inactiveTintColor: '#989EB1',
              activeBackgroundColor:'#f0f6f7'
            }}>
              <Tab.Screen
                name="Community"
                component={CommunityStackScreen}
                options={{
                tabBarLabel: 'Community',
                  tabBarIcon: (props) =>  
                  
                    <MaterialCommunityIcons
                      name="account-group"
                      color={props.color}
                      size={50}
                    />,
                }}
              />
              <Tab.Screen 
              name="Marketplace" 
              component={MarketplaceHome}
              options={{
                tabBarLabel: 'Marketplace',
                  tabBarIcon: (props) =>  
                  
                    <MaterialCommunityIcons
                      name="shopping"
                      color={props.color}
                      size={50}
                    />,
                }}
               />
              <Tab.Screen name="Messages"
               component={MessageStack} 
               options={{
                tabBarLabel: 'Messages',
                  tabBarIcon: (props) =>  
                  
                    <Ionicons
                      name="mail"
                      color={props.color}
                      size={50}
                    />,
                }}
               />
              <Tab.Screen 
              name="Profile"
              component={Settings}
               options={{
                tabBarLabel: 'Profile',
                  tabBarIcon: (props) =>  
                  
                    <MaterialCommunityIcons
                      name="account"
                      color={props.color}
                      size={50}
                    />,
                }} />
            </Tab.Navigator>
          )}
        </NavigationContainer>
      </PaperProvider>
    </UserContext.Provider>
  );
}
