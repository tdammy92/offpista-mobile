import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { SCREEN_NAME } from '../nav-constant';
import TabItemContainer from './tabIconContainer';

import useColors from '../../hooks/useColors';

import { useAppSelector } from '../../store';
import { BottomMenuParams } from '@src/types/nav-type';
import { fs, hp, isAndroid, spacing } from '@src/themes/dimensions';
import HomeScreen from '@src/screen/home-screen';
import ShortScreen from '@src/screen/short-screen';
import RewardScreen from '@src/screen/reward-screen';
import ProfileScreen from '@src/screen/profile-screen';
import { GalleryHorizontalEnd, Gift, House, User } from 'lucide-react-native';
import { HomeIcon, ShortsIcon } from '@src/assets';

const { Navigator, Screen } = createBottomTabNavigator<BottomMenuParams>();

const MainTab = () => {
  const colors = useColors();
  const { profileDetails } = useAppSelector(state => state.auth);

  return (
    <>
      <Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: [
            styles.container,
            { backgroundColor: colors.background100 },
          ],
          tabBarActiveTintColor: colors.primary100,
          tabBarInactiveTintColor: colors.inactiveTintColor,
          tabBarLabelStyle: {
            fontSize: fs(12),
          },

          // tabBarItemStyle: styles.tabItem,
          tabBarHideOnKeyboard: true,
        }}
      >
        <Screen
          name={SCREEN_NAME.home}
          component={HomeScreen}
          options={{
            title: 'Home',
            tabBarIcon: ({ color, focused, size }) => {
              return (
                <TabItemContainer
                  focused={focused}
                  color={color}
                  size={size}
                  name="Home"
                >
                  <HomeIcon height={25} width={25} fillColor={color} />
                </TabItemContainer>
              );
            },
          }}
        />

        <Screen
          name={SCREEN_NAME.shorts}
          component={ShortScreen}
          options={{
            title: 'Shorts',
            tabBarIcon: ({ color, focused, size }) => {
              return (
                <TabItemContainer
                  focused={focused}
                  color={color}
                  size={size}
                  name="Shorts"
                >
                  <ShortsIcon height={24} width={24} strokeColor={color} />
                </TabItemContainer>
              );
            },
          }}
        />
        <Screen
          name={SCREEN_NAME.reward}
          component={RewardScreen}
          options={{
            title: 'Reward',
            tabBarIcon: ({ color, focused, size }) => {
              return (
                <TabItemContainer
                  focused={focused}
                  color={color}
                  size={size}
                  name="Reward"
                >
                  <Gift color={color} />
                </TabItemContainer>
              );
            },
          }}
        />
        <Screen
          name={SCREEN_NAME.profile}
          component={ProfileScreen}
          options={{
            title: 'Profile',
            tabBarIcon: ({ color, focused, size }) => {
              return (
                <TabItemContainer
                  focused={focused}
                  color={color}
                  size={size}
                  name="Profile"
                >
                  <User color={color} />
                </TabItemContainer>
              );
            },
          }}
        />
      </Navigator>
    </>
  );
};

export default MainTab;

const styles = StyleSheet.create({
  container: {
    paddingTop: hp(spacing.base),
    height: isAndroid ? hp(65) : hp(80),
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 0.25,
  },
});
