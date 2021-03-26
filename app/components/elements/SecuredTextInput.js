import React from 'react';
import {TouchableOpacity, View, TextInput, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import styles from '../../styles/entryStyle';

export default function SecuredTextInput({
  navigation,
  values,
  onChangeText,
  type,
  placeholder,
  name,
}) {
  const [data, setData] = React.useState({
    secureTextEntry: true,
  });
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  return (
    <View style={styles.action}>
      <TextInput
        type={type}
        placeholder={placeholder}
        style={styles.textInput}
        autoCapitalize="none"
        secureTextEntry={data.secureTextEntry ? true : false}
        onChangeText={onChangeText}
        value={values[name]}
        required
      />
      <TouchableOpacity onPress={updateSecureTextEntry}>
        {data.secureTextEntry ? (
          <Feather name="eye-off" color="grey" size={20} />
        ) : (
          <Feather name="eye" color="grey" size={20} />
        )}
      </TouchableOpacity>
    </View>
  );
}
