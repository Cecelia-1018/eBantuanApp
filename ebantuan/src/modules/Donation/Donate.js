import React, { Component } from 'react';
import { Text, View,StyleSheet, Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper';


function Donate({navigation}) {
    const [amount, setAmount] = React.useState("");
    const [email, setEmail] = React.useState("");
    
    return (
      <View style={{
          flex: 1,
        }}>
           <Image
            style={styles.image}
            source={require('./assets/clipboard.png')}
          />
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
        value={amount}
        placeholder="Enter Your Receive Email"
        onChangeText={email => setEmail(email)}
        mode="outlined"
        outlineColor="#045de9"
        activeOutlineColor="#045de9"
        keyboardType="email-address"
        />
        <Button icon={require('./assets/donation.png')} style={styles.button} mode="contained" color="#045de9" onPress={() => navigation.navigate('Donate Money')}>
          Donate Now
        </Button>
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
    image: {
      width: 70,
      height: 70,
      marginLeft: 165,
    },
   
  
  });
  

export default Donate;