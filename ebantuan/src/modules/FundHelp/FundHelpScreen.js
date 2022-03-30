import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import {  Button, Title } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import FundHelpAccordion from './FundHelpAccordion';

function FundHelpScreen({ navigation }) {
  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
      ]}>
      <LinearGradient
        colors={['#045de9', '#09c6f9']}
        style={styles.box1}
        start={{ x: 0.3, y: 0 }}>
        <Title style={styles.title}>JKM eBantuan</Title>
        {/* <Title style={styles.title}>RM 15000.00</Title> */}
        <Button
          icon={require('./assets/donation.png')}
          style={styles.button}
          mode="contained"
          color="#e4f2f7"
          onPress={() => navigation.navigate('Fund Help Application History')}>
          Fund Application History
        </Button>
      </LinearGradient>
      <View style={styles.box2}>
        <Title style={styles.title2}>Fund Help Application List</Title>

        <FundHelpAccordion navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topic: {
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 18 * 1.5
  },
  box1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    margin: 20,
  },
  box2: {
    flex: 3,
    backgroundColor: 'white',
  },
  button: {
    width: 270,
    borderRadius: 30,
    marginTop: 10,
  },
  title: {
    color: '#FFF0F5',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
  },
  title2: {
    color: '#000',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    marginLeft: 20,
  },
});

export default FundHelpScreen;
