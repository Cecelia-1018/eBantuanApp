import 'react-native-gesture-handler'; //must be at the top
import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createStackNavigator} from '@react-navigation/stack';

import DashboardScreen from './src/modules/Dashboard/DashboardScreen';

import DonationScreen from './src/modules/Donation/DonationScreen';
import Donate from './src/modules/Donation/Donate';
import DonationReceipt from './src/modules/Donation/DonationReceipt';

import FundHelpScreen from './src/modules/FundHelp/FundHelpScreen';

import ProfileScreen from './src/modules/Profile/ProfileScreen';

import { LogBox } from 'react-native';

//Start

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",'Each child in a list should have a unique "key" prop.'
]);

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#000000',
      }}
      initialRouteName="Dashboard">
    
      <Tab.Screen
        name="Donation"
        component={DonationScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Donation',
          tabBarIcon: ({color, size}) => (
            <Image
            style={styles.icon2}
            source={require('./assets/donation.png')}
          />
          ),
        }}
      />
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({color, size}) => (
            <Image
            style={styles.icon}
            source={{uri: 'https://cdn-icons-png.flaticon.com/512/1828/1828673.png'}}
          />
          ),
        }}
      />
      <Tab.Screen
        name="Fund Help"
        component={FundHelpScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Fund Help',
          tabBarIcon: ({color, size}) => (
            <Image
            style={styles.icon2}
            source={require('./assets/fundhelp.png')}
          />
          ),
        }}
     
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <Image
            style={styles.icon2}
            source={require('./assets/profile.png')}
          />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator
        screenOptions={{
          cardStyle: {backgroundColor: '#fff'},
        }}
        initialRouteName="Home Tabs">
        <Stack.Screen
          name="Home Tabs"
          component={HomeTabs}
          options={{
            headerShown: false,
          }}
        />

        {/* add additional screen here */}
        <Stack.Screen
          name="Donate"
          component={Donate}
        />
        <Stack.Screen
          name="Donation Receipt"
          component={DonationReceipt}
        />
       

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  },
  icon2: {
    width: 30,
    height: 30,
  }
});