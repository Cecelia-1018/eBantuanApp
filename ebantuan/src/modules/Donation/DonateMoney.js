import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function CreditCard() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>CreditCard!</Text>
      </View>
    );
  }

  function StripePay() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>StripePay</Text>
      </View>
    );
  }

function DonateMoney(){
  
    return (
       
        <Tab.Navigator>
          <Tab.Screen name="Credit Card" component={CreditCard} />
          <Tab.Screen name="Stripe Pay" component={StripePay} />
        </Tab.Navigator>
     
    );
 
}

export default DonateMoney;