import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/entryStyle.js';
import * as Animatable from 'react-native-animatable';

import useFormValidation from '../hooks/useFormValidation';
import validateLogin from '../components/auth/validateLogin';
import firebase from '../firebase';

import TextButton from '../components/elements/TextButton';
import Button from '../components/elements/Button';
import SecuredTextInput from '../components/elements/SecuredTextInput';
import TextInput from '../components/elements/TextInput';
import EntryHeader from '../components/elements/EntryHeader';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const SignIn = ({navigation}) => {
  const {handleSubmit, handleChange, values, isSubmitting} = useFormValidation(
    INITIAL_STATE,
    validateLogin,
    authenticateUser,
  );

  const [busy, setBusy] = React.useState(false);

  async function authenticateUser() {
    setBusy(true);
    const {email, password} = values;
    try {
      await firebase.login(email, password);
      console.log('You have logged in successfully!');
    } catch (err) {
      console.log('Authentication Error', err);
    }
    setBusy(false);
  }

  return (
    <View style={styles.container}>
      <EntryHeader
        headerText={'Lofilan'}
        subHeaderText={'Sign In'}
        leadText={'Hi there! Nice to see you again.'}
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
        <Text style={[styles.text_footer, {marginTop: 30}]}>Password</Text>
        <SecuredTextInput
          values={values}
          type={'password'}
          placeholder={'Enter your password'}
          onChangeText={(text) => handleChange({name: 'password', value: text})}
          required={true}
        />
        <Button
          text="Sign In"
          onPress={handleSubmit}
          disabled={isSubmitting}
          anim={{animation: 'pulse', delay: 700}}
          gradient={['#F85F6A', '#F85F6A']}
        />

        <View style={{flexDirection: 'row'}}>
          <TextButton
            style={{flex: 1}}
            text={'Forgot Password'}
            onPress={() => navigation.push('Forgot')}
            type={'secondary'}
          />
          <TextButton
            text={'Sign Up'}
            onPress={() => navigation.push('SignUp')}
            type={'primary'}
          />
        </View>
      </Animatable.View>
    </View>
  );
};

export default SignIn;
