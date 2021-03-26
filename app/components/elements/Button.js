import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../../styles/entryStyle';
export default function Button({
  navigation,
  onPress,
  disabled,
  anim,
  gradient,
  text,
  style,
}) {
  return (
    <TouchableOpacity
      title="Sign In"
      onPress={onPress}
      disabled={disabled}
      style={[style]}>
      <Animatable.View
        animation={anim.animation}
        delay={anim.delay}
        style={[styles.btn]}>
        <LinearGradient colors={gradient} style={styles.btnGradient}>
          <Text style={[styles.text]}>{text}</Text>
        </LinearGradient>
      </Animatable.View>
    </TouchableOpacity>
  );
}
