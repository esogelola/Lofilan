import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../../styles/entryStyle';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function EntryHeader({
  navigation,
  headerText,
  subHeaderText,
  leadText,
  hasBackButton,
}) {
  return (
    <View style={styles.header}>
      <Text style={styles.text_header}>{headerText}</Text>
      {hasBackButton && (
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
      )}

      <Text style={styles.text_sub_header}>{subHeaderText}</Text>
      <Text style={styles.lead}>{leadText}</Text>
    </View>
  );
}
