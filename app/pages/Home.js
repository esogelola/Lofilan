import React from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';
import firebase from '../firebase';
export default function Home({navigation}) {
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
        <Text>Home Page!</Text>
        <Button onClick={logoutUser} title="Logout" />
      </View>
    </SafeAreaView>
  );
}
