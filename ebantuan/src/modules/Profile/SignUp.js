import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Platform,
  TextInput,
  Alert,
  ScrollView,
} from 'react-native';
import {Avatar, Button, IconButton} from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import auth, {firebase} from '@react-native-firebase/auth';
import RNRestart from 'react-native-restart';
// import * as Animatable from 'react-native-animatable';

const SignUp = ({navigation}) => {
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    confirm_password: '',
    displayName: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });
  const [error, setError] = useState('');
  const [isValid, setValid] = useState(true);

  const __isValidEmail = email => {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
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
  const textNameChange = val => {
    setData({
      ...data,
      displayName: val,
    });
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

  const handleConfirmPasswordChange = val => {
    setData({
      ...data,
      confirm_password: val,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };

  const __doSignUp = () => {
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

    __doCreateUser(data.email, data.password);
  };

  const __doCreateUser = (email, password) => {
    if (email === '' && password === '') {
      Alert.alert('Enter details here');
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(res => {
          res.user.updateProfile({
            displayName: data.displayName,
          });
          Alert.alert('Success ✅', 'Account created successfully'),
            RNRestart.Restart();
        })
        .catch(error => this.setState({errorMessage: error.message}));
    }
  };

  // const __doCreateUser = async (email, password) => {
  //   try {
  //     let response = await auth().createUserWithEmailAndPassword(
  //       email,
  //       password,
  //     );
  //     if (response && response.user) {
  //       Alert.alert('Success ✅', 'Account created successfully');
  //     }
  //   } catch (e) {
  //     console.error(e.message);
  //   }
  // };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#a9cdeb', '#dfc8f7']}
        style={styles.box1}
        start={{x: 0, y: 0}}>
        <Text style={styles.text_header}>Register</Text>

        <View style={styles.footer}>
          {/* <Animatable.View style={styles.footer} animation="fadeInUpBig"> */}

          <Text style={styles.text_footer}>Fullname</Text>
          <View style={styles.action}>
            <Icon
              size={20}
              type="ionicon"
              name={
                Platform.OS === 'ios'
                  ? 'ios-person-outline'
                  : 'md-person-outline'
              }
            />
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => {
                textNameChange(val);
              }}
            />
            {data.check_textInputChange ? (
              // <Animatable.View animation="bounceIn">

              <Feather name="check-circle" color="green" size={20} />
            ) : null}
          </View>
          <Text style={styles.text_footer}>Email</Text>
          <View style={styles.action}>
            <Icon
              size={20}
              type="ionicon"
              name={
                Platform.OS === 'ios' ? 'ios-mail-outline' : 'md-mail-outline'
              }
            />
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
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
          <Text style={[styles.text_footer, {marginTop: 20}]}>Password</Text>
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

          <Text style={[styles.text_footer, {marginTop: 20}]}>
            Confirm Password
          </Text>
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
              confirm_secureTextEntry={
                data.confirm_secureTextEntry ? true : false
              }
              autoCapitalize="none"
              onChangeText={val => handleConfirmPasswordChange(val)}
            />
            <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
              {data.confirm_secureTextEntry ? (
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
              onPress={__doSignUp}
              mode="contained">
              Sign Up
            </Button>
          </View>

          <View>
            <Button
              style={[styles.signUp]}
              color="black"
              onPress={() => navigation.goBack()}
              mode="text">
              Have an account ?
            </Button>
          </View>
        </View>
      </LinearGradient>
      {/* </Animatable.View> */}
    </View>
  );
};

export default SignUp;

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
    flex: 5,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: 'black',
    fontWeight: 'bold',
    paddingTop: 50,
    paddingBottom: 30,
    fontSize: 50,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  header_text: {
    color: 'grey',
    marginTop: 5,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 16,
  },
  action: {
    flexDirection: 'row',
    marginTop: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 3,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -10,
    paddingLeft: 12,
    paddingBottom: 2,
    color: '#05375a',
  },
  button: {
    alignItems: 'center',
    marginTop: 10,
  },
  signIn: {
    width: '100%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  signUp: {
    justifyContent: 'center',
    height: 45,
    marginTop: 5,
  },
});
