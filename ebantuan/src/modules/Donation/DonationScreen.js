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

function DonationScreen({navigation}) {
  const flatlistRef = useRef();

  const onPressFunction = () => {
    flatlistRef.current.scrollToEnd({animating: true});
  };

  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [donations, setDonations] = useState([]); // Initial empty array of forums

  const renderItem = ({item}) => {
    return (
      <SafeAreaProvider>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Donation Receipt', {
              //pass params here
              item: {
                amount: item.amount,
                email: item.email,
                cardnum: item.cardnum,
                carddate: item.carddate,
                cardcvv: item.cardcvv,
                date: item.date,
                time: item.time,
              },
            });
          }}>
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
                  <Title>RM {item.amount}</Title>
                  <View style={{flexDirection: 'row', }}>
                  <Paragraph>Date {item.date} </Paragraph>
                  <Paragraph>Time {item.time} </Paragraph>
                  </View>
                </View>
              </Card.Content>
            </Card>
          </View>
        </TouchableOpacity>
      </SafeAreaProvider>
    );
  };

  useEffect(() => {
    const subscriber = firestore()
      .collection('Donations')
      .onSnapshot(querySnapshot => {
        const donations = [];

        querySnapshot.forEach(documentSnapshot => {
          donations.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setDonations(donations);
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
        <Button
          icon={require('./assets/donation.png')}
          style={styles.button}
          mode="contained"
          color="#e4f2f7"
          onPress={() => navigation.navigate('Donate')}>
          Donate Now
        </Button>
      </LinearGradient>
      <View style={styles.box2}>
        <Title style={styles.title2}>My Donate History</Title>
        <FlatList
        ref={flatlistRef}
        data={donations}
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

export default DonationScreen;
