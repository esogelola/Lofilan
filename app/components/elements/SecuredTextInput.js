import React from 'react';
import {TouchableOpacity, View, TextInput, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export default function SecuredTextInput({
  navigation,
  values,
  onChangeText,
  type,
  placeholder,
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
        value={values.password}
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
