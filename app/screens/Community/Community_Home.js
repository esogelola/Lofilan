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

export default function CommunityHome({navigation}) {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <SafeAreaView>
      <ScrollView>
        <Header navigation={navigation} />
        <Animatable.View animation="fadeInDown" style={[styles.container2]}>
          <Image
            style={[styles.image, styles.center]}
            source={require('../../assets/images/Search_PNG.png')}
          />

          <Text style={[styles.largeTitle, styles.center]}>
            Join a Community
          </Text>
          <Text style={[styles.lead, styles.textCenter]}>
            Hey! Looks like you havent joined a community yet. You could create
            your own or find one nearby.
          </Text>
          <TextButton
            navigation={navigation}
            text={'Community Guidelines'}
            type={'primary'}
            style={[styles.center]}
          />
          <Button
            text="Browse"
            style={[styles.btn, styles.mb1]}
            anim={{animation: 'pulse', delay: 700}}
            gradient={['#F85F6A', '#F85F6A']}
          />
          <TextButton
            navigation={navigation}
            text={'Create a Community'}
            type={'secondary'}
            style={[styles.center]}
            onPress={() => {
              navigation.push('Community Create');
            }}
          />
        </Animatable.View>
      </ScrollView>
    </SafeAreaView>
  );
}
