import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, FlatList, Image} from 'react-native';
import {Button, IconButton} from 'react-native-paper';
import auth, {firebase} from '@react-native-firebase/auth';
import RNRestart from 'react-native-restart';
import {ImageOrVideo} from 'react-native-image-crop-picker';
import {Avatar} from './Avatar';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from 'react-native-elements';

function ProfileScreen({navigation}) {
  const onAvatarChange = (image: ImageOrVideo) => {
    console.log(image);
    const user = firebase.auth().currentUser;
    let userId = user.uid;
    // upload image to server here
    let reference = storage().ref(
      'gs://ebantuan-88d00.appspot.com/UserProfile/' + userId,
    );

    let task = reference.putFile(image.path.toString());

    task
      .then(() => {
        console.log('Profile Image uploaded to the bucket!');
      })
      .catch(e => console.log('uploading image error =>', e));
  };

  const logoutClick = () => {
    firebase.auth().signOut(), RNRestart.Restart();
  };

  const user = firebase.auth().currentUser;

  const [userCol, setUserCol] = useState([]);
  const {uid} = auth().currentUser;

  const ref = firestore().collection('users').doc(uid);

  //check this user exist or not
  ref.get().then(documentSnapshot => {
    if (documentSnapshot.exists) {
      return null;
    } else {
      //firebase with create users
      ref
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
  //display user profile picture
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    storage()
      .ref('gs://ebantuan-88d00.appspot.com/UserProfile/' + user.uid) //name in storage in firebase console
      .getDownloadURL()
      .then(url => {
        setImageUrl(url);
      })
      .catch(e => console.log('Errors while downloading => ', e));
  }, [user.uid]);

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

  const renderItem = ({item}) => {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#0072ff', '#00c6ff']}
          style={styles.box1}
          start={{x: 0, y: 0}}>
          <View style={styles.userRow}>
            <Button
              onPress={logoutClick}
              color="black"
              mode="contained"
              style={styles.logout}>
              Logout
            </Button>
            <Avatar
              onChange={onAvatarChange}
              source={
                imageUrl ? {uri: imageUrl} : require('./assets/profile.png')
              }
            />
            {/* {imageUrl ? null : <Text>Upload photo with black cirlce.</Text>} */}
            <Text style={styles.header_text}> {item.name}</Text>
            <Text style={styles.header_text}> {item.userId}</Text>
          </View>
        </LinearGradient>
        <View style={styles.footer}>
          {item.details ? (
            <View>
              <View style={styles.row}>
                <Text style={styles.title}>Account Info</Text>
                <IconButton
                  icon={'pen'}
                  size={25}
                  onPress={() => {
                    navigation.navigate('Edit Profile', {
                      item: {
                        name: item.name,
                        userId: user.uid,
                        address: item.address,
                        details: item.details,
                        iC: item.IC,
                        card_Num: item.card_Num,
                        phone_Num: item.phone_Num,
                        imageUrl: imageUrl,
                      },
                    });
                  }}
                />
              </View>
              <View style={styles.column}>
                <Image
                  source={require('./assets/address.png')}
                  style={styles.icon}
                />
                <View>
                  <Text style={styles.address}>Address: </Text>
                  <Text style={styles.ans}>{item.address}</Text>
                </View>
              </View>
              <View style={styles.column}>
                <Image
                  source={require('./assets/phone.png')}
                  style={styles.icon}
                />
                <View>
                  <Text style={styles.address}>Phone Number: </Text>
                  <Text style={styles.ans}>{item.phone_Num}</Text>
                </View>
              </View>
              <View style={styles.column}>
                <Image
                  source={require('./assets/IC.png')}
                  style={styles.icon}
                />
                <View>
                  <Text style={styles.address}>Idendity Card Number: </Text>
                  <Text style={styles.ans}>{item.IC}</Text>
                </View>
              </View>
              <View style={styles.column}>
                <Image
                  source={require('./assets/creditcard.png')}
                  style={styles.icon}
                />
                <View>
                  <Text style={styles.address}>Card Number: </Text>
                  <Text style={styles.ans}>{item.card_Num}</Text>
                </View>
              </View>
            </View>
          ) : (
            <View style={styles.center}>
              <Button
                color="black"
                mode="text"
                onPress={() => {
                  navigation.navigate('Edit Profile', {
                    item: {
                      name: item.name,
                      userId: user.uid,
                      address: item.address,
                      details: item.details,
                      iC: item.IC,
                      card_Num: item.card_Num,
                      phone_Num: item.phone_Num,
                      imageUrl: imageUrl,
                    },
                  });
                }}>
                Fill in details for system need
              </Button>
              <Image
                style={styles.image}
                source={require('./assets/info.png')}
              />
            </View>
          )}
        </View>
      </View>
    );
  };
  return (
    <FlatList
      // ref={flatlistRef}
      data={userCol}
      keyExtractor={item => item.userId}
      renderItem={renderItem}
    />
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box1: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 20,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  header_text: {
    fontSize: 15,
    color: 'black',
  },
  userRow: {
    flex: 1,
    alignItems: 'center',
    padding: 15,
    marginTop: 10,
  },
  logout: {
    position: 'absolute',
    right: 6,
    top: 10,
  },
  footer: {
    flex: 3,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  center: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  address: {
    fontSize: 15,
  },
  image: {
    height: 350,
    width: 350,
  },
  text: {
    borderBottomWidth: 2,
    fontSize: 15,

    color: 'black',
    paddingBottom: 15,
  },
  address: {
    fontSize: 20,
    color: 'black',
    marginBottom: 5,
    paddingTop: 9,
    paddingLeft: 20,
  },
  ans: {
    paddingLeft: 20,
    fontSize: 18,
  },
  row: {
    paddingBottom: 10,
    flexDirection: 'row',
    alignContent: 'space-around',
  },
  title: {
    fontSize: 30,
    color: 'black',
  },
  column: {
    flexDirection: 'row',
    marginBottom: 20,
    borderBottomWidth: 0.2,
    borderTopWidth: 0.2,
    color: 'grey',
    borderRadius: 30,
    backgroundColor: '#fff',
  },
  icon: {
    marginTop: 8,
    marginLeft: 5,
    resizeMode: 'contain',
    height: 50,
    width: 60,
    borderRadius: 200,
  },
});
