import React from 'react';
import {View, Text} from 'react-native';
import {ActivityIndicator, Colors} from 'react-native-paper';
export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <ActivityIndicator animating={true} color={Colors.red800} size="large" />
    </View>
  );
}

const styles = {
  container: {
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally
    flex: 1,
  },
};
