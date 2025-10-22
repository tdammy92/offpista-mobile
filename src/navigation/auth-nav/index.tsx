import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREEN_NAME } from '../nav-constant';
import OnBordingScreen from '@src/screen/onboarding-screen';
import LoginScreen from '@src/screen/login-screen';
import SignUpScreen from '@src/screen/signup-screen';

const { Screen, Group } = createNativeStackNavigator();

export default function AuthNav() {
  return (
    <Group>
      <Screen name={SCREEN_NAME.onboarding} component={OnBordingScreen} />
      <Screen name={SCREEN_NAME.login} component={LoginScreen} />
      <Screen name={SCREEN_NAME.signup} component={SignUpScreen} />
    </Group>
  );
}
