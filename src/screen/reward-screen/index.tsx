import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Container from '@src/components/common/Container';
import useColors from '@src/hooks/useColors';
import { fontSize } from '@src/themes/dimensions';

const RewardScreen = () => {
  const colors = useColors();
  return (
    <Container style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: colors.light, fontSize: fontSize['2xl'] }}>
        Reward Screen
      </Text>
    </Container>
  );
};

export default RewardScreen;
