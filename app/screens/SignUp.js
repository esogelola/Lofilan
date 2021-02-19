import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';

import useFormValidation from '../hooks/useFormValidation';
import validateSignup from '../components/auth/validateSignup';
import firebase from '../firebase';

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
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{fontWeight: 'bold', textAlign: 'center'}}>Lofilan</Text>
        <Text style={styles.text_header}>Sign Up</Text>
        <Text style={{color: '#989EB1', fontSize: 15}}>
          Lets get you connected!
        </Text>
      </View>

      <Animatable.View animation="fadeInDown" style={styles.footer}>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Enter your email"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(text) => handleChange({name: 'email', value: text})}
          />
        </View>

        <Text style={[styles.text_footer, {marginTop: 20}]}>Password</Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Enter your password"
            style={styles.textInput}
            autoCapitalize="none"
            secureTextEntry={data.secureTextEntry ? true : false}
            name="password"
            onChangeText={(text) =>
              handleChange({name: 'password', value: text})
            }
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>

        <Text style={[styles.text_footer, {marginTop: 20}]}>
          Confirm Password
        </Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Confirm your password"
            style={styles.textInput}
            autoCapitalize="none"
            secureTextEntry={data.secureTextEntry ? true : false}
            name="confirmPassword"
            onChangeText={(text) =>
              handleChange({name: 'confirmPassword', value: text})
            }
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>
        <Animatable.View animation="pulse" delay={700} style={styles.button}>
          <LinearGradient colors={['#F85F6A', '#F85F6A']} style={styles.signIn}>
            <TouchableOpacity onPress={handleSubmit} disabled={isSubmitting}>
              <Text style={[styles.textSign, {color: '#ffff'}]}>Sign Up</Text>
            </TouchableOpacity>
          </LinearGradient>
        </Animatable.View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Text
              style={{
                fontWeight: 'bold',
                textAlign: 'left',
                color: '#989EB1',
                paddingRight: 5,
              }}>
              Have an account?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text
              style={{
                fontWeight: 'bold',
                textAlign: 'left',
                color: '#F85F6A',
              }}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    paddingTop: 20,
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#F85F6A',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#000000',
    paddingBottom: 5,
  },

  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },

  button: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  backbutton: {
    backgroundColor: '#F85F6A',
    width: 44,
    height: 44,
    borderRadius: 44 / 2,
  },
  signIn: {
    width: '100%',
    height: 53,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
