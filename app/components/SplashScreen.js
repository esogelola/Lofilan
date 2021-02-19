import React from 'react';
import {ActivityIndicator, Colors} from 'react-native-paper';
export default function SplashScreen() {
  return <ActivityIndicator animating={true} color={Colors.red800} />;
}
