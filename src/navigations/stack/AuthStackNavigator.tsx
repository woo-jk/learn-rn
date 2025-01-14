import React from 'react';
import AuthHomeScreen from '../../screens/auth/AuthHomeScreen';
import LoginScreen from '../../screens/auth/LoginScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {authNaviation} from '../../constants';
import SignupScreen from '../../screens/auth/SignupScreen';

export type AuthStackParamList = {
  [authNaviation.AUTH_HOME]: undefined;
  [authNaviation.LOGIN]: undefined;
  [authNaviation.SIGNUP]: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

function AuthStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {backgroundColor: 'white'},
        headerStyle: {backgroundColor: 'white', shadowColor: 'gray'},
        headerTitleStyle: {fontSize: 15},
        headerTintColor: 'black',
      }}>
      <Stack.Screen
        name={authNaviation.AUTH_HOME}
        component={AuthHomeScreen}
        options={{headerTitle: '', headerShown: false}}
      />
      <Stack.Screen
        name={authNaviation.LOGIN}
        component={LoginScreen}
        options={{headerTitle: '로그인'}}
      />
      <Stack.Screen
        name={authNaviation.SIGNUP}
        component={SignupScreen}
        options={{headerTitle: '회원가입'}}
      />
    </Stack.Navigator>
  );
}

export default AuthStackNavigator;
