import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firestore from '@react-native-firebase/firestore';

function DonationScreen () {
  
  firestore()
  .collection('Donation')
  .add({
    donorName: 'Ada Lovelace',
    money: 30,
  })
  .then(() => {
    console.log('Donation added!');
  });
  
    
    return (
      <View style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}>
        <Text>DonationScreen</Text>
      </View>
    );
 
}

export default DonationScreen;