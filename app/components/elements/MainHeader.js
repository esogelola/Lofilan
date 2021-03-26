import React from 'react';
import {SafeAreaView} from 'react-native';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import BackButton from '../elements/BackButton';
export default function MainHeader({navigation, hasBackButton}) {
  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Feather name="menu" color="black" size={20} />
        </TouchableOpacity>
        <Text style={styles.text_header}>Lofilan</Text>
      </View>
      <BackButton
        style={styles.btnBack}
        navigation={navigation}
        hasBackButton={hasBackButton}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    elevation: 2,
    padding: 10,
    width: '100%',

    alignItems: 'center',
  },
  text_header: {
    flex: 13,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 5,
  },
  icon: {
    flex: 1,
    marginLeft: 20,
    padding: 5,
    textAlign: 'center',
  },
  btnBack: {
    marginLeft: 25,
  },
});
