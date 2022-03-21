import React, { Component } from 'react';
import { Text, View, Image, StyleSheet} from 'react-native';
import {Card, Paragraph, Button, Title} from 'react-native-paper';

function DonationReceipt({navigation, route}){
  //navigation
  const {item} = route.params;
    return (
      <View>
         <Image
            style={styles.image}
            source={require('./assets/clipboard.png')}
          />
      <Card>
        <Card.Content>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 5,
            }}>
            <Title>Donated Amount: RM {item.amount}</Title>
            
            <Paragraph>Date: {item.date} </Paragraph>
            <Paragraph>Time: {item.time} </Paragraph>

            <Paragraph>Card Number: {item.cardnum} </Paragraph>
            <Paragraph>MM/YY : {item.carddate} </Paragraph>
            <Paragraph>CVV/CVV2 : {item.cardcvv} </Paragraph>

            <Text>Your notified email : {item.email} </Text>
            
          </View>
        </Card.Content>
      </Card>
      <Button
          mode="contained"
          color="#045de9"
          style={styles.button}
          onPress={() => navigation.goBack()}>
          Back
        </Button>
    </View>
    );

}

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    marginLeft: 30,
  },
  button:{
    width: 350,
    borderRadius: 30,
    marginLeft: 20,
    marginTop: 10,
  },

});

export default  DonationReceipt;