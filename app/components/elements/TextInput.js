import React from 'react';
import {View, TextInput} from 'react-native';
import styles from '../../styles/entryStyle';

export default function textInput({
  navigation,
  values = {},
  onChangeText,
  type,
  placeholder,
  fieldName,
  autoCapitalize,
  required,
}) {
  return (
    <View style={styles.action}>
      <TextInput
        type={type}
        placeholder={placeholder}
        style={styles.textInput}
        autoCapitalize="none"
        fieldName={fieldName}
        autoCapitalize={autoCapitalize}
        onChangeText={onChangeText}
        value={values.email}
        required={required}
      />
    </View>
  );
}
