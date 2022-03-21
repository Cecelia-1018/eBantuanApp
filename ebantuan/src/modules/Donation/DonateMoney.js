import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {TextInput, Button, Title} from 'react-native-paper';

const Tab = createMaterialTopTabNavigator();

function CreditCard({navigation}) {
  const [cardnum, setCardNum] = React.useState('');
  const [carddate, setCardDate] = React.useState('');
  const [cardcvv, setCardCvv] = React.useState('');
  return (
    <View>
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
    </View>
  );
}

function StripePay() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>StripePay</Text>
    </View>
  );
}

function DonateMoney() {
  return (
    <>
      <View style={{flexDirection: 'row'}}>
        <View>
          <Text style={styles.title}>Donate Amount</Text>
          <Title style={styles.title}>RM 150.00</Title>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 80}}>
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
          <Image
            style={styles.image2}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/5968/5968382.png',
            }}
          />
        </View>
      </View>
      <Tab.Navigator>
        <Tab.Screen name="Credit/Debit Card" component={CreditCard} />
        <Tab.Screen name="Stripe Pay" component={StripePay} />
      </Tab.Navigator>
    </>
  );
}
const styles = StyleSheet.create({
  title: {
    marginLeft: 10,
  },
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
  input: {
    margin: 10,
  },
  button:{
    width: 350,
    borderRadius: 30,
    marginLeft: 20,
    marginTop: 10,
  },
});

export default DonateMoney;
