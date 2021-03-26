import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../../styles/communityStyle';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function BackButton({navigation, hasBackButton, style}) {
  return (
    <View style={style}>
      {hasBackButton && (
        <TouchableOpacity
          style={styles.backbutton}
          onPress={() => {
            navigation.goBack();
          }}>
          <AntDesign
            name="caretleft"
            color="white"
            style={{textAlign: 'center', marginTop: 10}}
            size={24}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}
