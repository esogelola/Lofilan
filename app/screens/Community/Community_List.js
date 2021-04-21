import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import firebase from '../../firebase';
import * as Animatable from 'react-native-animatable';

import Header from '../../components/elements/MainHeader';
import styles from '../../styles/communityStyle';
import TextButton from '../../components/elements/TextButton';
import Button from '../../components/elements/Button';

export default function communityList({navigation}) {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <SafeAreaView>
      <ScrollView>
        <Header navigation={navigation} hasBackButton={true} />
        <Animatable.View animation="fadeInDown" style={[styles.container2]}>
          <View style={styles.featured}>
            <Text>Features Community / Event</Text>
          </View>
          <Text>Location: 32 Brookhaven Avenue</Text>
        </Animatable.View>
      </ScrollView>
    </SafeAreaView>
  );
}
