import React from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';
import firebase from '../firebase';
import UserContext from '../contexts/UserContext';
export default function Settings({navigation}) {
  const {user} = React.useContext(UserContext);
  async function logoutUser() {
    try {
      await firebase.logout();

      console.log('You have logged out successfully.');
    } catch (err) {
      console.error('Logout Error', err);
    }
  }
  return (
    <SafeAreaView>
      <View>
        <Text>PROFILE</Text>
        <Text>email: {user.email}</Text>
        <Button onPress={logoutUser} title="Logout" />
      </View>
    </SafeAreaView>
  );
}
