import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CommunityHome from '../../screens/Community/Community_Home';
import CommunityCreateStackScreen from '../stacks/CommunityCreateStackScreen';
const CommunityStack = createStackNavigator();
const CommunityStackScreen = () => (
  <CommunityStack.Navigator>
    <CommunityStack.Screen
      name="Community Home"
      component={CommunityHome}
      options={{
        headerShown: false,

        animationTypeForReplace: false ? 'pop' : 'push',
      }}
    />
    <CommunityStack.Screen
      name="Community Create"
      component={CommunityCreateStackScreen}
      options={{
        headerShown: false,

        animationTypeForReplace: false ? 'pop' : 'push',
      }}
    />
  </CommunityStack.Navigator>
);

export default CommunityStackScreen;
