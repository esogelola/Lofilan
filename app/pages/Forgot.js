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
import AntDesign from 'react-native-vector-icons/AntDesign';
import useFormValidation from '../hooks/useFormValidation';
import validatePasswordReset from '../components/auth/validatePasswordReset';
import firebase from '../firebase';

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
      navigation.history.push('/login');
    } catch (err) {
      console.error('Password Reset Error', err);
      //toast(err.message);
    }
    setBusy(false);
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{fontWeight: 'bold', textAlign: 'center'}}>Lofilan</Text>
        <TouchableOpacity
          style={styles.backbutton}
          onPress={() => {
            navigation.push('SignIn');
          }}>
          <AntDesign
            name="caretleft"
            color="white"
            style={{textAlign: 'center', marginTop: 10}}
            size={24}
          />
        </TouchableOpacity>
        <Text style={styles.text_header}>Forgot Password</Text>
        <Text style={{color: '#989EB1', fontSize: 15}}>
          Provide your account’s email for which you want to reset your
          password!
        </Text>
      </View>

      <Animatable.View animation="fadeInDown" style={styles.footer}>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Enter your email"
            style={styles.textInput}
            autoCapitalize="none"
            name="email"
            onChangeText={(text) => handleChange({name: 'email', value: text})}
          />
        </View>
        <TouchableOpacity
          title="Sign In"
          onPress={handleSubmit}
          disabled={isSubmitting}>
          <Animatable.View animation="pulse" delay={700} style={styles.button}>
            <LinearGradient
              colors={['#F85F6A', '#F85F6A']}
              style={styles.signIn}>
              <Text style={[styles.textSign, {color: '#ffff'}]}>Confirm</Text>
            </LinearGradient>
          </Animatable.View>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

export default Forgot;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingTop: 100,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  backbutton: {
    backgroundColor: '#F85F6A',
    width: 44,
    height: 44,
    borderRadius: 44 / 2,
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

  signIn: {
    width: '100%',
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
