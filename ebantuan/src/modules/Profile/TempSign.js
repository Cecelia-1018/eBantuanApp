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
import {Avatar, IconButton} from 'react-native-paper';

import {Icon} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import * as Anmatable from 'react-native-animatable';

const TempSign = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('./assets/JKM_logo.png')}
          style={styles.logo}
          resizeMode="stretch"
        />
        <Text style={styles.text}>
          Lead the formulation of comprehensive, integrated and effective
          national security policy and management
        </Text>
      </View>
      <View style={styles.footer}>
        {/* <Animatable.View style={styles.footer} animation="fadeInUpBig"> */}
        <Text style={styles.title}>Welfare Assistance Management System</Text>

        <View style={styles.button}>
          <Button
            style={[styles.signIn]}
            color="black"
            onPress={() => navigation.navigate('SigninScreen')}
            mode="outlined"
            title="Get Started -->"></Button>
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
  header: {
    backgroundColor: '#a9cdeb',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 100,
    borderBottomEndRadius: 100,
  },
  footer: {
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: 800,
    height: 400,
  },
  title: {
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
});
