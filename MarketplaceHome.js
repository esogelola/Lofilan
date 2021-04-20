import React from 'react';
import {SafeAreaView, View, Text, Button, StyleSheet, FlatList, Image} from 'react-native';
import firebase from '../firebase';
import Header from '../components/elements/MainHeader';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SearchBar } from 'react-native-elements';

const data = [
  { id: '1', title: 'First item',  },
  { id: '2', title: 'Second item' },
  { id: '3', title: 'Third item' },
  { id: '4', title: 'Fourth item' }
];

function SellScreen() {
  
  return (
    <View style={{ flex: 1}}>
      
      <SearchBar
        placeholder="What are you selling?" 
        containerStyle = {{backgroundColor: 'white', borderBottomColor: 'white', borderTopColor: 'white'}}
        inputContainerStyle = {{backgroundColor: 'white'}}
      />
    </View>
  );
}

function CategoriesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Basic FlatList Example</Text>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            
            <Text style={styles.listItemText}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

function SearchScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Search Screen</Text>
    </View>
  );
}

function YourItemScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Your Items Screen</Text>
    </View>
  );
}

const Tab1 = createMaterialTopTabNavigator();


export default function Marketplace({navigation}) {


  return (
    <Tab1.Navigator
    initialRouteName="Feed"
    tabBarOptions={{
      inactiveTintColor: '#000000',
      activeTintColor: '#F85F6A',
      labelStyle: { fontSize: 11, fontWeight: 'bold' },
      indicatorStyle: {backgroundColor: '#F85F6A'},
      style: { backgroundColor: 'white' },
    }}
    >
      <Tab1.Screen name="Sell" component={SellScreen} />
      <Tab1.Screen name="Categories" component={CategoriesScreen} />
      <Tab1.Screen name="Search" component={SearchScreen} />
      <Tab1.Screen name="Your Items" component={YourItemScreen} />
    </Tab1.Navigator>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    color: '#101010',
    marginTop: 60,
    fontWeight: '700'
  },
  listItem: {
    marginTop: 10,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '100%'
  },
  listItemText: {
    fontSize: 18
  },
  coverImage: {
    width: 100,
    height: 100,
    borderRadius: 8
  }
});

