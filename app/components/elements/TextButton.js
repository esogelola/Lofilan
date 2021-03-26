import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import styles from '../../styles/entryStyle';

export default function Button({navigation, text, type, onPress, style}) {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Text style={type === 'primary' ? styles.primary : styles.secondary}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
