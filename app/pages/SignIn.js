import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles/signIn.style';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

const SignIn = ({navigation}) => {
  const [data, setData] = React.useState({
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
  });
  const handlePassword = (val) => {
    setData({
      ...data,
      password: val,
    });
  };

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
        <Text style={styles.text_header}>Sign In</Text>
        <Text style={styles.lead}>Hi there! Nice to see you.</Text>
      </View>

      <Animatable.View animation="fadeInDown" style={styles.footer}>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Enter your email"
            style={styles.textInput}
            autoCapitalize="none"
          />
        </View>

        <Text style={[styles.text_footer, {marginTop: 30}]}>Password</Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Enter your password"
            style={styles.textInput}
            autoCapitalize="none"
            secureTextEntry={data.secureTextEntry ? true : false}
            onChangeText={(val) => handlePassword(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>
        <TouchableOpacity title="Sign In" onPress={() => signIn()}>
          <Animatable.View animation="pulse" delay={700} style={styles.button}>
            <LinearGradient
              colors={['#F85F6A', '#F85F6A']}
              style={styles.signIn}>
              <Text style={[styles.textSign, {color: '#ffff'}]}>Sign In</Text>
            </LinearGradient>
          </Animatable.View>
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={{flex: 1}}>
            <Text
              style={{fontWeight: 'bold', textAlign: 'left', color: '#989EB1'}}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.push('SignUp')}>
            <Text
              style={{
                fontWeight: 'bold',
                textAlign: 'right',
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
