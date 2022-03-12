import 'react-native-gesture-handler'; //must be at the top
import * as React from 'react';
import { View, Text } from 'react-native';
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
        tabBarActiveTintColor: '#FFC0CB',
      }}
      initialRouteName="Home">
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
      />
      <Tab.Screen
        name="Donation"
        component={DonationScreen}
       
      />
      <Tab.Screen
        name="Fund Help"
        component={FundHelpScreen}
     
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        
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