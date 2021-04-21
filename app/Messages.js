/*import React from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';
import firebase from '../firebase';
export default function Messages({navigation}) {
  return (
    <SafeAreaView>
      <View>
        <Text>Messages!</Text>
      </View>
    </SafeAreaView>
  );
}*/
import React from 'react';
import {View, Text, Button, StyleSheet, FlatList} from 'react-native';
import {
  Container,
  Card,
  UserInfo,
  UserImgWrapper,
  UserImg,
  UserInfoText,
  UserName,
  PostTime,
  MessageText,
  TextSection,
} from '../styles/MessageStyles';
import Header from '../components/elements/MainHeader';
import {ScrollView} from 'react-native';
const Messages = [
  {
    id: '2',
    userName: 'Alisher Urazbayev',
    userImg: require('../assets/users/user-2.jpg'),
    messageTime: '2 hours ago',
    messageText: 'Hey',
  },
  {
    id: '3',
    userName: 'Emmanuel Sogelola',
    userImg: require('../assets/users/user-3.jpg'),
    messageTime: '3 hours ago',
    messageText: 'Hey',
  },
];

const MessagesScreen = ({navigation}) => {
  return (
    <Container>
      <FlatList
        data={Messages}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <Card
            onPress={() =>
              navigation.navigate('Chat', {userName: item.userName})
            }>
            <UserInfo>
              <UserImgWrapper>
                <UserImg source={item.userImg} />
              </UserImgWrapper>
              <TextSection>
                <UserInfoText>
                  <UserName>{item.userName}</UserName>
                  <PostTime>{item.messageTime}</PostTime>
                </UserInfoText>
                <MessageText>{item.messageText}</MessageText>
              </TextSection>
            </UserInfo>
          </Card>
        )}
      />
    </Container>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});
