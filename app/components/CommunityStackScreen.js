import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CommunityHome from '../screens/CommunityHome';
import CommunityCreate from '../screens/CommunityCreate';
const CommunityStack = createStackNavigator();
const CommunityStackScreen = () => (
  <CommunityStack.Navigator>
    <CommunityStack.Screen
      name="community Home"
      component={CommunityHome}
      options={{
        headerShown: false,

        animationTypeForReplace: false ? 'pop' : 'push',
      }}
    />
    <CommunityStack.Screen
      name="community Create"
      component={CommunityCreate}
      options={{
        headerShown: false,

        animationTypeForReplace: false ? 'pop' : 'push',
      }}
    />
  </CommunityStack.Navigator>
);

export default CommunityStackScreen;
