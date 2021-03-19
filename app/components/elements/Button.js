import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
export default function Button({
  navigation,
  onPress,
  disabled,
  anim,
  gradient,
  text,
}) {
  return (
    <TouchableOpacity title="Sign In" onPress={onPress} disabled={disabled}>
      <Animatable.View
        animation={anim.animation}
        delay={anim.delay}
        style={styles.btn}>
        <LinearGradient colors={gradient} style={styles.btnGradient}>
          <Text style={[styles.text]}>{text}</Text>
        </LinearGradient>
      </Animatable.View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  primary: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#F85F6A',
  },
  secondary: {
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#989EB1',
  },
  btn: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 30,
  },
  btnGradient: {
    width: '100%',
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffff',
  },
});
