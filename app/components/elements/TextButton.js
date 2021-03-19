import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export default function Button({navigation, text, type, onPress, style}) {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Text style={type === 'primary' ? styles.primary : styles.secondary}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  primary: {
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#F85F6A',
  },
  secondary: {
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#989EB1',
  },
});
