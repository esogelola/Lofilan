import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

export default function textInput({
  navigation,
  values,
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

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#000000',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
});
