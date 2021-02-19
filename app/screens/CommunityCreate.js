import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
  Image,
  FlatList,
  ImageBackground,
  Linking,
} from 'react-native';
import firebase from '../firebase';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import {Modal, Portal, Provider, TextInput} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
          <Text>Be a good leader.</Text>
        </Modal>
      </Portal>
      <TouchableOpacity
        style={styles.backbutton}
        onPress={() => {
          navigation.push('community Home');
        }}>
        <AntDesign
          name="caretleft"
          color="white"
          style={{textAlign: 'center', marginTop: 10}}
          size={24}
        />
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.title}>Create a Community</Text>

        <Text style={styles.small}>
          Finding a Community near you must be tough, doesn’t hurt to start one
          for your Neighbourhood
        </Text>
        <Image
          source={require('../assets/images/people_PNG.png')}
          style={styles.image}
        />
        <Text onPress={showModal} style={styles.smallOrange}>
          Responsibilities of a Community leader.
        </Text>
        <TextInput label="Community Name" style={{width: '100%'}} mode="flat" />
        <TouchableOpacity style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>Next</Text>
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
    marginTop: 0,
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
  backbutton: {
    backgroundColor: '#F85F6A',
    width: 44,
    height: 44,
    borderRadius: 44 / 2,
    margin: 10,
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
    marginTop: 100,
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
