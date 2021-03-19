import React from 'react';
import {View, Text} from 'react-native';
import styles from '../../styles/entryStyle';

export default function EntryHeader({headerText, subHeaderText, leadText}) {
  return (
    <View style={styles.header}>
      <Text style={styles.text_header}>{headerText}</Text>
      <Text style={styles.text_sub_header}>{subHeaderText}</Text>
      <Text style={styles.lead}>{leadText}</Text>
    </View>
  );
}
