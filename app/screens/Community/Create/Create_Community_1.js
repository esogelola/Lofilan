import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import {Divider} from 'react-native-paper';

import Header from '../../../components/elements/MainHeader';
import styles from '../../../styles/communityStyle';
import TextButton from '../../../components/elements/TextButton';
import Button from '../../../components/elements/Button';
import TextInput from '../../../components/elements/TextInput';
export default function CreateCommunity1({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView>
        <Header navigation={navigation} hasBackButton={true} />
        <Animatable.View animation="fadeInDown" style={[styles.container2]}>
          <Text style={[styles.largeTitle, styles.center]}>
            Create a Community
          </Text>
          <Text style={[styles.lead, styles.textCenter]}>
            Finding a Community near you must be tough, doesn’t hurt to start
            one for your Neighbourhood.
          </Text>
          <Image
            style={[styles.image, styles.center]}
            source={require('../../../assets/images/people_PNG.png')}
          />

          <TextButton
            navigation={navigation}
            text={'Responsibilities of a Community leader.'}
            type={'primary'}
            style={[styles.center, styles.mb1]}
          />
          <Divider />
          <View style={styles.container}>
            <TextInput
              placeholder="Community Name"
              autoCapitalize="none"
              fieldName="email"
              required={true}
            />
          </View>
          <Button
            text="Next"
            style={[styles.btn, styles.mb1, styles.mbt0]}
            anim={{animation: 'pulse', delay: 700}}
            gradient={['#F85F6A', '#F85F6A']}
            onPress={() => {
              navigation.navigate('Community Create 2', {name: 'Jim'});
            }}
          />
        </Animatable.View>
      </ScrollView>
    </SafeAreaView>
  );
}
