import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from '../styles/entryStyle';
import * as Animatable from 'react-native-animatable';

import useFormValidation from '../hooks/useFormValidation';
import validatePasswordReset from '../components/auth/validatePasswordReset';
import firebase from '../firebase';

import EntryHeader from '../components/elements/EntryHeader';
import TextInput from '../components/elements/TextInput';
import Button from '../components/elements/Button';
import {ScrollView} from 'react-native';
const INITIAL_STATE = {
  email: '',
};

const Forgot = ({navigation}) => {
  const {handleSubmit, handleChange, values, isSubmitting} = useFormValidation(
    INITIAL_STATE,
    validatePasswordReset,
    handleResetPassword,
  );
  const [busy, setBusy] = React.useState(false);

  async function handleResetPassword() {
    setBusy(true);
    const {email} = values;
    try {
      await firebase.resetPassword(email);
      //toast('Password Rest Email has been sent.');
      console.log('Password Rest Email has been sent.');
      navigation.push('SignIn');
    } catch (err) {
      console.error('Password Reset Error', err);
      //toast(err.message);
    }
    setBusy(false);
  }
  return (
    <ScrollView style={styles.container}>
      <EntryHeader
        headerText={'Lofilan'}
        subHeaderText={'Forgot Password'}
        leadText={
          "Provide your account's email for which you want to reset your password!"
        }
        navigation={navigation}
        hasBackButton={true}
      />

      <Animatable.View animation="fadeInDown" style={styles.footer}>
        <Text style={styles.text_footer}>Email</Text>
        <TextInput
          placeholder="Enter your email"
          autoCapitalize="none"
          fieldName="email"
          onChangeText={(text) => handleChange({name: 'email', value: text})}
          values={values.email}
          required={true}
        />

        <Button
          text="Confirm"
          onPress={handleSubmit}
          disabled={isSubmitting}
          anim={{animation: 'pulse', delay: 700}}
          style={{marginTop: 50}}
          gradient={['#F85F6A', '#F85F6A']}
        />
      </Animatable.View>
    </ScrollView>
  );
};

export default Forgot;
