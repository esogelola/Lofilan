import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import {Divider} from 'react-native-paper';

import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

import Header from '../../../components/elements/MainHeader';
import styles from '../../../styles/communityStyle';
import TextButton from '../../../components/elements/TextButton';
import Button from '../../../components/elements/Button';
import TextInput from '../../../components/elements/TextInput';
export default function CreateCommunity1({navigation, route}) {
  const {params} = route;
  return (
    <SafeAreaView>
      <ScrollView>
        <Header navigation={navigation} hasBackButton={true} />
        <Animatable.View animation="fadeInDown" style={[styles.container2]}>
          <Text style={[styles.largeTitle, styles.center]}>
            Community Details
          </Text>
          <Text style={[styles.lead, styles.textCenter]}>
            A good community has a good description, what best describes your
            Neighbourhood?
          </Text>

          <Divider />
          <View style={styles.container}>
            <TextInput
              placeholder="Community Description"
              autoCapitalize="none"
              fieldName="description"
              required={true}
            />
          </View>
          <Divider />
          <Text style={[styles.lead, styles.textCenter]}>
            Where is your community located at, and how big is the radius?
          </Text>
          <View style={[styles.map, styles.container]}>
            <MapView
              provider={PROVIDER_GOOGLE} // remove if not using Google Maps
              style={styles.map}
              region={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}></MapView>
          </View>
          <Button
            text="Next"
            style={[styles.btn, styles.mb1, styles.mbt0]}
            anim={{animation: 'pulse', delay: 700}}
            gradient={['#F85F6A', '#F85F6A']}
            onPress={() => {
              navigation.navigate('Community Create 3', {description: 'Bob'});
            }}
          />
        </Animatable.View>
      </ScrollView>
    </SafeAreaView>
  );
}
