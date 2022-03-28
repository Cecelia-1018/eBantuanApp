import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Avatar, IconButton, Title} from 'react-native-paper';

import {Icon} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import * as Anmatable from 'react-native-animatable';

const TempSign = ({navigation}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#045de9', '#09c6f9']}
        style={styles.box1}
        start={{x: 0.3, y: 0}}>
        <Title style={styles.title}>JKM eBantuan</Title>
        {/* <Title style={styles.title}>RM 15000.00</Title> */}
      </LinearGradient>

      <View style={styles.footer}>
        {/* <Animatable.View style={styles.footer} animation="fadeInUpBig"> */}
        <Text style={styles.Name}>Welfare Assistance Management System</Text>
        <Text style={styles.text}>
          Lead the formulation of comprehensive, integrated and effective
          national security policy and management
        </Text>
        <View style={styles.button}>
          <Button
            style={[styles.signIn]}
            color="#09c6f9"
            onPress={() => navigation.navigate('SigninScreen')}
            mode="outlined"
            title="Get Started"></Button>
        </View>
      </View>
    </View>
  );
};

export default TempSign;

const {height} = Dimensions.get('screen');
// const height_logo = height * 0.18;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  box1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    margin: 20,
  },
  header: {
    backgroundColor: '#a9cdeb',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 100,
    borderBottomEndRadius: 100,
  },
  footer: {
    flex: 2,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: 800,
    height: 400,
  },
  Name: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: 'grey',
    fontSize: 15,
    marginBottom: 35,
  },

  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  title: {
    color: '#FFF0F5',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
  },
});
