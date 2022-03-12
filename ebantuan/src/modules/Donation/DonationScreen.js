import React, { Component } from 'react';
import { Text, View } from 'react-native';

class DonationScreen extends Component {
  render() {
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
}

export default DonationScreen;