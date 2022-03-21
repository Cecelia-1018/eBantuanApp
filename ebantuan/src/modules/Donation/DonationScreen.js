import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { Button,Title } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';

function DonationScreen ({navigation}) {
  
  // firestore()
  // .collection('Donation')
  // .add({
  //   donorName: 'Ada Lovelace',
  //   money: 30,
  // })
  // .then(() => {
  //   console.log('Donation added!');
  // });
  
    
    return (
      <View style={[styles.container, {
        // Try setting `flexDirection` to `"row"`.
        flexDirection: "column"
      }]}>
       
        <LinearGradient colors={['#045de9', '#09c6f9',]} style={styles.box1} start={{x:0.3, y:0}}>
        <Title style={styles.title}>Total Donated Amount</Title>
        <Title style={styles.title}>RM 15000.00</Title> 
        <Button icon={require('./assets/donation.png')} style={styles.button} mode="contained" color="#e4f2f7" onPress={() => navigation.navigate('Donate')}>
          Donate Now
        </Button>
        </LinearGradient>
        <View style={styles.box2}>
        <Title style={styles.title2}>My Donate History</Title>
        <Text style={styles.title2}> Add after donation part done .... will use flatlist </Text>
        </View>
      </View>
    );
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box1:{
    flex: 1,
    justifyContent:"center",
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    margin: 20,
  },
  box2:{
    flex: 3, backgroundColor: "white"
  },
  button:{
    width: 200,
    borderRadius: 30,
    marginTop: 10,
  },
  title:{
    color: '#FFF0F5',
    fontFamily: 'sans-serif',
    fontWeight: "bold"
  },
  title2:{
    color: '#000',
    fontFamily: 'sans-serif',
    fontWeight: "bold",
    marginLeft: 20,

  },

});

export default DonationScreen;