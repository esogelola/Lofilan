import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import CommunityCreate1 from '../../screens/Community/Create/Create_Community_1';
import CommunityCreate2 from '../../screens/Community/Create/Create_Community_2';

const CommunityStack = createStackNavigator();
const CommunityStackScreen = () => (
  <CommunityStack.Navigator>
    <CommunityStack.Screen
      name="Community Create 1"
      component={CommunityCreate1}
      options={{
        headerShown: false,

        animationTypeForReplace: false ? 'pop' : 'push',
      }}
    />
    <CommunityStack.Screen
      name="Community Create 2"
      component={CommunityCreate2}
      options={{
        headerShown: false,

        animationTypeForReplace: false ? 'pop' : 'push',
      }}
    />
  </CommunityStack.Navigator>
);

export default CommunityStackScreen;
