import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  TextInput,
  Alert,
} from 'react-native';
import {Avatar, Button, IconButton} from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import auth, {firebase} from '@react-native-firebase/auth';
// import * as Animatable from 'react-native-animatable';
import RNRestart from 'react-native-restart';

const SignIn = ({navigation}) => {
  const [data, setData] = useState({
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
  });
  const __isValidEmail = email => {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState('');
  const [isValid, setValid] = useState(true);
  const __doLogin = () => {
    if (!data.email) {
      setError('Email required *');
      setValid(false);
      return;
    } else if (
      !data.password &&
      data.password.trim() &&
      data.password.length > 6
    ) {
      setError('Weak password, minimum 5 chars');
      setValid(false);
      return;
    } else if (!__isValidEmail(data.email)) {
      setError('Invalid Email');
      setValid(false);
      return;
    }

    __doSingIn(data.email, data.password);
  };

  const __doSingIn = async (email, password) => {
    try {
      let response = await auth().signInWithEmailAndPassword(email, password);
      if (response && response.user) {
        Alert.alert('Success ✅', 'Logged successfully'), RNRestart.Restart();
      }
    } catch (e) {
      Alert.alert('This user were not exists, try again');
    }
  };

  const textInputChange = val => {
    if (val.length !== 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = val => {
    setData({
      ...data,
      password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  //const

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#a9cdeb', '#dfc8f7']}
        style={styles.box1}
        start={{x: 0, y: 0}}>
        <Text style={styles.text_header}>Login</Text>

        {/* <Animatable.View style={styles.footer} animation="fadeInUpBig"> */}
        <View style={styles.footer}>
          <Text style={styles.text_footer}>Email</Text>
          <View style={styles.action}>
            <Ionicons size={20} color="black" android="md-mail-outline" />
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              mode="outline"
              outlineColor="#FFC0CB"
              activeOutlineColor="#FE7E9C"
              onChangeText={val => {
                textInputChange(val);
                setError;
              }}
              error={isValid}
            />
            {data.check_textInputChange ? (
              // <Animatable.View animation="bounceIn">

              <Feather name="check-circle" color="green" size={20} />
            ) : null}
          </View>
          <Text style={[styles.text_footer, {marginTop: 35}]}>Password</Text>
          <View style={styles.action}>
            <Icon
              size={20}
              type="ionicon"
              name={
                Platform.OS === 'ios'
                  ? 'ios-lock-closed-outline'
                  : 'md-lock-closed-outline'
              }
            />
            <TextInput
              style={styles.textInput}
              secureTextEntry={data.secureTextEntry ? true : false}
              autoCapitalize="none"
              onChangeText={val => handlePasswordChange(val)}
              error={isValid}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <Button
              style={[styles.signIn]}
              color="black"
              onPress={__doLogin}
              mode="contained">
              Log In
            </Button>
          </View>

          <View>
            {/* <Text style={[styles.text_ques, {marginTop: 20}]}>
              Don't have an account ?{' '}
            </Text> */}
            <Button
              style={[styles.signUp]}
              color="black"
              onPress={() => navigation.navigate('SignupScreen')}
              mode="text">
              Don't have an account?
            </Button>
          </View>
        </View>
      </LinearGradient>
      {/* </Animatable.View> */}
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  box1: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 20,
    margin: 0,
  },
  footer: {
    flex: 2,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 60,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    paddingTop: 50,
    paddingBottom: 30,
    fontSize: 50,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  header_text: {
    color: 'black',
    marginTop: 5,
  },
  text_footer: {
    color: '#032238',
    fontSize: 20,
  },
  text_ques: {
    color: 'black',
    fontSize: 16,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    color: 'white',
    paddingLeft: 12,
    paddingBottom: 2,
  },
  button: {
    alignItems: 'center',
    marginTop: 30,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  signUp: {
    justifyContent: 'center',
    height: 50,
    marginTop: 0.5,
  },
});
