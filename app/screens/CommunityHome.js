import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  ImageBackground,
  Linking,
} from 'react-native';
import firebase from '../firebase';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import {Modal, Portal, Provider} from 'react-native-paper';
import searchImage from '../assets/images/Search_PNG.png';
export default function CommunityHome({navigation}) {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20, margin: 50};
  return (
    <SafeAreaView>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}>
          <Text>Don't be weird.</Text>
        </Modal>
      </Portal>
      <View style={styles.container}>
        <Image source={searchImage} style={styles.image} />
        <Text style={styles.title}>Join a Community</Text>

        <Text onPress={showModal} style={styles.smallOrange}>
          Community Guideline
        </Text>

        <Text style={styles.small}>
          Hey! Looks like you havent joined a community yet. You could create
          your own or find one nearby.
        </Text>
        <TouchableOpacity
          style={styles.appButtonContainer}
          onPress={() => navigation.push('community Create')}>
          <Text style={styles.appButtonText}>Browse</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.textButtonContainer}>
          <Text style={styles.textButtonText}>Create a Community</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 25,
  },
  image: {
    width: 160,
    height: 182,
    resizeMode: 'contain',
    marginBottom: 25,
  },
  title: {
    fontFamily: 'Quicksand',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 32,
    /* identical to box height */

    color: '#000000',
  },
  small: {
    fontFamily: 'Asap',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 18,
    color: '#989EB1',
    marginTop: 0,
    padding: 5,
  },
  smallOrange: {
    fontFamily: 'Asap',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 14,
    color: '#F85F6A',
    marginTop: 0,
    padding: 5,
    textDecorationLine: 'underline',
  },

  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#F85F6A',

    paddingVertical: 20,
    paddingHorizontal: 100,
    marginBottom: 10,
    height: 53,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  appButtonText: {
    fontFamily: 'Asap',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 19,
    color: '#FFFFFF',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },

  textButtonContainer: {
    elevation: 8,
    marginBottom: 10,
  },
  textButtonText: {
    fontFamily: 'Asap',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 19,
    color: '#989EB1',
    alignSelf: 'center',
  },
  button: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
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
