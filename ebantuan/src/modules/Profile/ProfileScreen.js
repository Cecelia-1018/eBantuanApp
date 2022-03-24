import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import {firebase} from '@react-native-firebase/auth';
import RNRestart from 'react-native-restart';

function ProfileScreen({navigation}) {
  const user = firebase.auth().currentUser;

  const logoutClick = () => {
    firebase.auth().signOut(), RNRestart.Restart();
  };
  return (
    <View>
      <Text>Profile</Text>
      <Button onPress={logoutClick} color="#FE7E9C">
        You will be logged out once click.
      </Button>
    </View>
  );
}

export default ProfileScreen;
