import React, { ReactNode, useEffect } from 'react';
import { Text, View } from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import useColors from '../../hooks/useColors';
import { fontSize, fs, hp, wp } from '@src/themes/dimensions';

type TabItemContainerProps = { children: ReactNode } & {
  focused: boolean;
  color: string;
  name?: string;
  size: number;
};
const TabItemContainer = ({
  children,
  focused,
  color,
  size,
  name,
}: TabItemContainerProps) => {
  const colors = useColors();
  const scale = useSharedValue(0.95);
  const focusValue = useSharedValue(focused ? 1 : 0);

  useEffect(() => {
    scale.value = withSpring(focused ? 1 : 0.95, {
      damping: 10,
      stiffness: 120,
      mass: 0.5,
    });
    focusValue.value = withSpring(focused ? 1 : 0, {
      damping: 10,
      stiffness: 120,
      mass: 0.5,
    });
  }, [focused]);

  const animatedContainerStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const animatedTextStyle = useAnimatedStyle(() => ({
    color: interpolateColor(
      focusValue.value,
      [0, 1],
      [colors.textSecondary, colors.primary],
    ),
  }));

  return (
    <View
      style={[
        {
          alignItems: 'center',
          justifyContent: 'center',
          width: wp(66),
        },
        // animatedContainerStyle,
      ]}
    >
      {children}
      <Text
        style={[
          {
            fontSize: fs(12),
            paddingTop: hp(2),
            color: color,
          },
          // animatedTextStyle,
        ]}
      >
        {name}
      </Text>
    </View>
  );
};

export default TabItemContainer;
