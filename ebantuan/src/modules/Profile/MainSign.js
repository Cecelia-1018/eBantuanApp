import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import TempSign from './TempSign';
import SignIn from './SignIn';
import SignUp from './SignUp';
import {View} from 'react-native';

const RootStack = createStackNavigator();

const MainSign = ({navigation}) => (
  <RootStack.Navigator>
    <RootStack.Screen
      name="TempSign"
      component={TempSign}
      options={{headerShown: false}}
    />
    <RootStack.Screen
      name="SigninScreen"
      component={SignIn}
      options={{headerShown: false}}
    />
    <RootStack.Screen
      name="SignupScreen"
      component={SignUp}
      options={{headerShown: false}}
    />
  </RootStack.Navigator>
);

export default MainSign;
