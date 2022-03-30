import React, { useState, useEffect, Component,useCallback  } from 'react';
import { Text, View, StyleSheet, Image, Alert } from 'react-native';
import { TextInput, Button, Snackbar, Title } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import DocumentPicker, { types } from 'react-native-document-picker';
import auth, {firebase} from '@react-native-firebase/auth';

function FundHelpApplicationScreen({ navigation, applicationType }) {

  const user = firebase.auth().currentUser;

  const [userCol, setUserCol] = useState([]);
  const { uid } = auth().currentUser;

  const ref2 = firestore().collection('users').doc(uid);

  //check this user exist or not
  ref2.get().then(documentSnapshot => {
    if (documentSnapshot.exists) {
      return null;
    } else {
      //firebase with create users
      ref2
        .set({
          userId: user.uid,
          name: user.displayName,
          details: Boolean(false),
          IC: 'My Card',
          address: 'Home Address',
          card_Num: '',
          phone_Num: '',
        })
        .then(() => {
          console.log('User Info added!');
        });
    }
  });

  useEffect(() => {
    const subscriber = firestore()
      .collection('users')
      .where('userId', 'in', [uid])
      .onSnapshot(querySnapshot => {
        const userCol = [];

        querySnapshot.forEach(documentSnapshot => {
          userCol.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setUserCol(userCol);
      });
    return () => subscriber();
  }, [uid]);

  const [name, setName] = React.useState("");
  const [ic, setIC] = React.useState("");


  //firebase
  const ref = firestore().collection('FundHelp');

  //set date time for each forum post
  const [applicationDate, setDate] = useState('');

  const applicationStatus = () => {
    var RandomNumber = Math.floor(Math.random() * 100) + 1;
    if (RandomNumber <= 10) {
      return "pending";
    } else if (RandomNumber > 10 && RandomNumber <= 30) {
      return "rejected";
    } else {
      return "approved";
    }
  }

  useEffect(() => {
    const d = new Date()
    var date = d.toLocaleDateString();

    setDate(date);

  }, []);

  const [fileResponse, setFileResponse] = useState([]);

  const handleDocumentSelection = useCallback(async () => {
    try {
      const response = await DocumentPicker.pick({
        presentationStyle: 'fullScreen',
        type: [types.allFiles],
    allowMultiSelection: true,
      });
      Alert("Upload success");
      //setFileResponse(response);
    } catch (err) {
      console.warn(err);
    }
  }, []);

  async function addFundHelp() {
    await ref
      .add({
        //add id here
        Application_Name: applicationType,
        Application_Date: applicationDate,
        Application_Status: applicationStatus(),
        //userId: uid
      })
      .then(() => {
        console.log('Fund Help added!');
      });

    setName('');
    setIC('');
    // TODO: Hold a few seconds
    navigation.navigate('FundHelpScreen');

  }


  return (
    <View style={{
      flex: 1,
    }}>
      <Title>
        {applicationType}
      </Title>

      <TextInput
        style={styles.input}
        label="Enter"
        value={userCol.name}
        mode="outlined"
        outlineColor="#045de9"
        activeOutlineColor="#045de9"
        //editable="false"
      />
      <TextInput
        style={styles.input}
        label="IC"
        value={userCol.IC}
        mode="outlined"
        outlineColor="#045de9"
        activeOutlineColor="#045de9"
        //editable="false"
      />
      <Button style={styles.input} icon={require('./assets/upload.png')} onPress={handleDocumentSelection}>Upload Document(s)</Button>
      <Button icon={require('./assets/donation.png')} style={styles.button} mode="contained" color="#045de9" onPress={() => {
        addFundHelp();
      }}>
        Submit Now
      </Button>
    </View>
  );

}

const styles = StyleSheet.create({
  input: {
    margin: 10,
  },
  text: {
    marginLeft: 15,
  },
  button: {
    width: 350,
    borderRadius: 30,
    marginLeft: 20,
    marginTop: 10,
  },
});


export default FundHelpApplicationScreen;