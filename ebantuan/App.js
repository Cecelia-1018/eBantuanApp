import 'react-native-gesture-handler'; //must be at the top
import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createStackNavigator} from '@react-navigation/stack';

import DashboardScreen from './src/modules/Dashboard/DashboardScreen';
import DonationScreen from './src/modules/Donation/DonationScreen';
import FundHelpScreen from './src/modules/FundHelp/FundHelpScreen';
import ProfileScreen from './src/modules/Profile/ProfileScreen';

import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
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
            source={{uri: 'https://cdn-icons.flaticon.com/png/512/2805/premium/2805734.png?token=exp=1647065621~hmac=fb7801e36ff23a687e79e2ef6ca64779'}}
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
            source={{uri: 'https://cdn-icons.flaticon.com/png/512/4142/premium/4142652.png?token=exp=1647065746~hmac=441f10d28e34250bfc0c3e472f8e6314'}}
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
            source={{uri: 'https://cdn-icons.flaticon.com/png/512/552/premium/552909.png?token=exp=1647065823~hmac=b6f2054fc1762bff276d1f698e795a72'}}
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