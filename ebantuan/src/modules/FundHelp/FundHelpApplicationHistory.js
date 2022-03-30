import React, {Component, useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {Card, Paragraph, Button, Title} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import auth, {firebase} from '@react-native-firebase/auth';

//show status put at card property 

function FundHelpApplicationHistory({navigation}) {
  const flatlistRef = useRef();

  const onPressFunction = () => {
    flatlistRef.current.scrollToEnd({animating: true});
  };

  const {uid} = auth().currentUser;

  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [fundHelp, setFundHelp] = useState([]); // Initial empty array of forums

   function cardStatus (status){
    if(status=="approved"){
      return "./assets/approved.png";
    }else if(status=="rejected"){
      return "./assets/rejected.png";
    }else{
      return "./assets/pending.jpg";
    }
  }

  const renderItem = ({item}) => {
    return (
      <SafeAreaProvider>
        <View>
          <Card>
            <Card.Content>
              <View
                style={{
                  backgroundColor: 'white',
                  borderRadius: 5,
                  padding: 5,
                  margin: 5,
                }}>
                <View>
                  <Title>{item.Application_Name}</Title>
                  <Paragraph>Date {item.Application_Date} </Paragraph>
                </View>

                <LinearGradient
                  colors={['#045de9', '#09c6f9']}
                  style={{alignSelf: 'flex-start', padding: 5, borderRadius: 5}}
                  start={{x: 0.3, y: 0}}>
                  <Text style={{fontWeight: 'bold', color: 'white'}}>{item.Application_Status}</Text>
                </LinearGradient>
              </View>
            </Card.Content>
          </Card>
        </View>
      </SafeAreaProvider>
    );
  };

  useEffect(() => {
    const subscriber = firestore()
      .collection('FundHelp')
      .where('userId', 'in', [uid])
      .onSnapshot(querySnapshot => {
        const fundHelp = [];

        querySnapshot.forEach(documentSnapshot => {
          fundHelp.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setFundHelp(fundHelp);
        setLoading(false);


    });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#045de9" />;
  }

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
        start={{x: 0.3, y: 0}}>
        <Title style={styles.title}>JKM eBantuan</Title>
        {/* <Title style={styles.title}>RM 15000.00</Title> */}
      </LinearGradient>
      <View style={styles.box2}>
        <Title style={styles.title2}>My Fund Application History</Title>
        <FlatList
        ref={flatlistRef}
        data={fundHelp}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    width: 200,
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

export default FundHelpApplicationHistory;
