import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ViewStyle } from 'react-native';
import useColors from '@src/hooks/useColors';

interface ContainerProps {
  children?: React.ReactNode;
  style?: ViewStyle;
}

const Container = ({ children, style }: ContainerProps) => {
  const colors = useColors();
  return (
    <View style={[{ backgroundColor: colors.background100, flex: 1 }, style]}>
      {children}
    </View>
  );
};

export default Container;
