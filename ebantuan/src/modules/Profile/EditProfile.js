import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {TextInput, Button, Title, Card, Snackbar} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import LinearGradient from 'react-native-linear-gradient';

function EditProfile({navigation, route}) {
  const {item} = route.params;

  const [txtAddress, setTxtAddress] = useState(item.address);
  const [txtName, setTxtxName] = useState(item.name);
  const [txtIC, setTxtIC] = useState(item.iC);
  const [txtCard, setTxtCard] = useState(item.card_Num);
  const [txtPhone, setTxtPhone] = useState(item.phone_Num);

  const resetData = e => {
    e.preventDefault();
    setTxtAddress(item.address);

    setTxtCard(item.card_Num);
    setTxtIC(item.iC);
    setTxtPhone(item.phone_Num);
  };
  const ref = firestore().collection('users').doc(item.userId);
  async function updateUserCol() {
    if (!txtIC.trim()) {
      alert('Please enter your IC.');
      return;
    } else {
      await ref
        .update({
          details: Boolean(true),
          IC: txtIC,
          address: txtAddress,
          card_Num: txtCard,
          phone_Num: txtPhone,
        })
        .then(() => {
          console.log('user info updated!'), navigation.goBack();
        });
      setTxtAddress('');
      setTxtCard('');
      setTxtIC('');
      setTxtPhone('');
    }
  }
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#0072ff', '#00c6ff']}
        style={styles.box1}
        start={{x: 0, y: 0}}>
        <Text style={styles.header}>Edit Information</Text>

        <View style={styles.footer}>
          <View style={styles.action}>
            <Text style={[styles.text_footer, {marginTop: 20}]}>Address:</Text>
            <TextInput
              value={txtAddress}
              onChangeText={setTxtAddress}
              mode="outlined"
              outlineColor="#a9cdeb"
              activeOutlineColor="#a9cdeb"
              multiline={true}
              numberOfLines={3}
              style={styles.input}
            />
          </View>
          <View style={styles.action}>
            <Text
              style={[styles.text_footer, {marginTop: 20, paddingRight: 50}]}>
              IC:
            </Text>
            <TextInput
              value={txtIC}
              onChangeText={setTxtIC}
              mode="outlined"
              outlineColor="#a9cdeb"
              activeOutlineColor="#a9cdeb"
              style={styles.input}
            />
          </View>
          <View style={styles.action}>
            <Text style={[styles.text_footer, {marginTop: 20}]}>
              Phone Number:
            </Text>
            <TextInput
              value={txtPhone}
              onChangeText={setTxtPhone}
              mode="outlined"
              outlineColor="#a9cdeb"
              activeOutlineColor="#a9cdeb"
              style={styles.input_2}
            />
          </View>
          <View style={styles.action}>
            <Text
              style={[styles.text_footer, {marginTop: 20, paddingRight: 20}]}>
              Card Number:
            </Text>
            <TextInput
              value={txtCard}
              onChangeText={setTxtCard}
              mode="outlined"
              outlineColor="#a9cdeb"
              activeOutlineColor="#a9cdeb"
              style={styles.input_2}
            />
          </View>
          <View style={styles.btnContainer}>
            <Button
              mode="contained"
              onPress={() => updateUserCol()}
              color="#7ea4fe"
              style={styles.submitButton}>
              Submit
            </Button>

            <Button
              mode="contained"
              color="#a1cbf4"
              style={styles.submitButton}
              onPress={resetData}>
              Reset
            </Button>
            <Button
              mode="contained"
              color="#ccdef0"
              style={styles.submitButton}
              onPress={() => navigation.goBack()}>
              Back
            </Button>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}
export default EditProfile;
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
  header: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingBottom: 30,
  },
  footer: {
    flex: 5,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: 'white',
  },
  text_footer: {
    color: '#05375a',
    fontSize: 15,
    paddingRight: 10,
  },
  input: {
    width: 250,
  },
  input_2: {
    width: 200,
  },
  action: {
    flexDirection: 'row',
    marginTop: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 3,
  },
  btnContainer: {
    paddingTop: 20,
    justifyContent: 'space-evenly',
    flexDirection: 'row-reverse',
  },
});
