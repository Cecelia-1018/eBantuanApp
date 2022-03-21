import React, { Component } from 'react';
import { Text, View,StyleSheet, Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';

function Donate({navigation}) {
    const [amount, setAmount] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [cardnum, setCardNum] = React.useState('');
    const [carddate, setCardDate] = React.useState('');
    const [cardcvv, setCardCvv] = React.useState('');
    
    return (
      <View style={{
          flex: 1,
        }}>
           {/* <Image
            style={styles.image}
            source={require('./assets/clipboard.png')}
          /> */}

        <TextInput
        style={styles.input}
        label="Enter Donate Amount"
        value={amount}
        placeholder="Enter Your Prefer Amount"
        onChangeText={amount => setAmount(amount)}
        mode="outlined"
        outlineColor="#045de9"
        activeOutlineColor="#045de9"
        keyboardType="numeric"
        />
        <Text style={styles.text}>Minimum donate amount RM 1.00 </Text>
        <TextInput
        style={styles.input}
        label="Enter Notify Email"
        value={email}
        placeholder="Enter Your Receive Email"
        onChangeText={email => setEmail(email)}
        mode="outlined"
        outlineColor="#045de9"
        activeOutlineColor="#045de9"
        keyboardType="email-address"
        />
         <TextInput
        style={styles.input}
        label="Enter Card Number"
        value={cardnum}
        placeholder="Enter Your Card Number"
        onChangeText={cardnum => setCardNum(cardnum)}
        mode="outlined"
        outlineColor="#045de9"
        activeOutlineColor="#045de9"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        label="MM/YY"
        value={carddate}
        placeholder="MM/YY"
        onChangeText={carddate => setCardDate(carddate)}
        mode="outlined"
        outlineColor="#045de9"
        activeOutlineColor="#045de9"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        label="CVV/CVV2"
        value={cardcvv}
        placeholder="CVV/CVV2"
        onChangeText={cardcvv => setCardCvv(cardcvv)}
        mode="outlined"
        outlineColor="#045de9"
        activeOutlineColor="#045de9"
        keyboardType="numeric"
      />
        <Button icon={require('./assets/donation.png')} style={styles.button} mode="contained" color="#045de9" onPress={() => navigation.navigate('Donation')}>
          Donate Now
        </Button>
      
        <View style={{flexDirection: 'row', marginLeft: 140}}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/5968/5968397.png',
            }}
          />
          <Image
            style={styles.image2}
            source={{
              uri: 'https://cdn.vox-cdn.com/thumbor/UKSLdttYoIK2bv1gd231rqL4eiQ=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13674554/Mastercard_logo.jpg',
            }}
          />
         </View>
      </View>
    );
 
}

const styles = StyleSheet.create({
    input:{
     margin: 10,
    },
    text:{
     marginLeft: 15,
    },
    button:{
      width: 350,
      borderRadius: 30,
      marginLeft: 20,
      marginTop: 10,
    },
    // image: {
    //   width: 70,
    //   height: 70,
    //   marginLeft: 165,
    // },
    image: {
      width: 30,
      height: 30,
      margin: 10,
    },
    image2: {
      width: 40,
      height: 30,
      margin: 10,
    },
   
  
  });
  

export default Donate;