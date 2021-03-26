import React from 'react';
import {View, Text, TouchableOpacity, Platform, ScrollView} from 'react-native';
import styles from '../styles/entryStyle.js';

import * as Animatable from 'react-native-animatable';

import useFormValidation from '../hooks/useFormValidation';
import validateSignup from '../components/auth/validateSignup';
import firebase from '../firebase';

import EntryHeader from '../components/elements/EntryHeader';
import TextInput from '../components/elements/TextInput';
import SecuredTextInput from '../components/elements/SecuredTextInput';
import Button from '../components/elements/Button';
import TextButton from '../components/elements/TextButton';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};

const SignUp = ({navigation}) => {
  const [data, setData] = React.useState({
    secureTextEntry: true,
  });
  const {handleSubmit, handleChange, values, isSubmitting} = useFormValidation(
    INITIAL_STATE,
    validateSignup,
    authenticateUser,
  );
  const [busy, setBusy] = React.useState(false);

  async function authenticateUser() {
    //setBusy(true);
    const {name, email, password} = values;
    try {
      await firebase.register(name, email, password);
      //toast("You have signed up successfully!");
      console.log('You have signed up successfully!');
    } catch (err) {
      console.error('Authentication Error', err);
      //toast(err.message);
    }
    // setBusy(false);
  }

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  return (
    <ScrollView style={styles.container}>
      <EntryHeader
        headerText={'Lofilan'}
        subHeaderText={'Sign Up'}
        leadText={"Let's get you connected!"}
      />

      <Animatable.View animation="fadeInDown" style={styles.footer}>
        <Text style={styles.text_footer}>Email</Text>

        <TextInput
          placeholder="Enter your email"
          fieldName="email"
          values={values}
          style={styles.textInput}
          autoCapitalize="none"
          onChangeText={(text) => handleChange({name: 'email', value: text})}
        />

        <Text style={[styles.text_footer, {marginTop: 20}]}>Password</Text>

        <SecuredTextInput
          placeholder="Enter your password"
          style={styles.textInput}
          autoCapitalize="none"
          secureTextEntry={data.secureTextEntry ? true : false}
          name="password"
          values={values}
          onChangeText={(text) => handleChange({name: 'password', value: text})}
        />

        <Text style={[styles.text_footer, {marginTop: 20}]}>
          Confirm Password
        </Text>

        <SecuredTextInput
          placeholder="Confirm your password"
          style={styles.textInput}
          autoCapitalize="none"
          secureTextEntry={data.secureTextEntry ? true : false}
          name="confirmPassword"
          values={values}
          onChangeText={(text) =>
            handleChange({name: 'confirmPassword', value: text})
          }
        />

        <Button
          text="Sign Up"
          onPress={handleSubmit}
          disabled={isSubmitting}
          anim={{animation: 'pulse', delay: 700}}
          style={{marginTop: 30}}
          gradient={['#F85F6A', '#F85F6A']}
        />
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Text
              style={{
                fontWeight: 'bold',
                textAlign: 'left',
                color: '#989EB1',
                marginRight: 5,
              }}>
              Have an account?
            </Text>
          </TouchableOpacity>
          <TextButton
            text={'Sign Up'}
            onPress={() => navigation.push('SignIn')}
            type={'primary'}
          />
        </View>
      </Animatable.View>
    </ScrollView>
  );
};

export default SignUp;
