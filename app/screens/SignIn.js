import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from '../styles/signIn.style';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

import useFormValidation from '../hooks/useFormValidation';
import validateLogin from '../components/auth/validateLogin';
import firebase from '../firebase';

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
  const [data, setData] = React.useState({
    secureTextEntry: true,
  });
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
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Lofilan</Text>
        <Text style={styles.text_sub_header}>Sign In</Text>
        <Text style={styles.lead}>Hi there! Nice to see you.</Text>
      </View>

      <Animatable.View animation="fadeInDown" style={styles.footer}>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Enter your email"
            style={styles.textInput}
            autoCapitalize="none"
            fieldName="email"
            onChangeText={(text) => handleChange({name: 'email', value: text})}
            value={values.email}
            required
          />
        </View>

        <Text style={[styles.text_footer, {marginTop: 30}]}>Password</Text>
        <View style={styles.action}>
          <TextInput
            type="password"
            placeholder="Enter your password"
            style={styles.textInput}
            autoCapitalize="none"
            secureTextEntry={data.secureTextEntry ? true : false}
            onChangeText={(text) =>
              handleChange({name: 'password', value: text})
            }
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
        <TouchableOpacity
          title="Sign In"
          onPress={handleSubmit}
          disabled={isSubmitting}>
          <Animatable.View animation="pulse" delay={700} style={styles.button}>
            <LinearGradient
              colors={['#F85F6A', '#F85F6A']}
              style={styles.signIn}>
              <Text style={[styles.textSign, {color: '#ffff'}]}>Sign In</Text>
            </LinearGradient>
          </Animatable.View>
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{flex: 1}}
            onPress={() => navigation.push('Forgot')}>
            <Text
              style={{fontWeight: 'bold', textAlign: 'left', color: '#989EB1'}}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.push('SignUp')}>
            <Text
              style={{
                fontWeight: 'bold',
                textAlign: 'left',
                color: '#F85F6A',
              }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SignIn;
