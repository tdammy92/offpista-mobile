import { View, Text } from 'react-native';
import React from 'react';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { SCREEN_HEIGHT } from '@src/themes/dimensions';

const usePlayerHeight = () => {
  const tabBarHeight = useBottomTabBarHeight();

  const PlayerHeight = SCREEN_HEIGHT - tabBarHeight;
  return { PlayerHeight, tabBarHeight };
};

export default usePlayerHeight;
