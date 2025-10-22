import { NavigationContainer } from '@react-navigation/native';
import { useAppSelector } from '@src/store';
import React, { useCallback, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { navigationRef } from './navigationRef';
import RootNav from './rootNav';
import { darkTheme } from '@src/themes/dark-theme';
import { lightTheme } from '@src/themes/light-theme';

const AppContainer = () => {
  const { theme } = useAppSelector(state => state.theme);

  const onReady = useCallback(() => {
    // console.log('nav is ready');
  }, []);

  const onStateChange = useCallback(async () => {}, []);

  useEffect(() => {
    //   SplashScreen.hide();

    return () => {};
  }, []);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={onReady}
      theme={theme === 'dark' ? darkTheme : lightTheme}
      onStateChange={onStateChange}
    >
      <StatusBar
        animated
        showHideTransition={'fade'}
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
      />

      <RootNav />
    </NavigationContainer>
  );
};

export default AppContainer;
