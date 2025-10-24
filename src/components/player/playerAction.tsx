import { LoveIcon, SaveIcon, ShareIcon } from '@src/assets';
import { formatNumber } from '@src/helper/utils';
import useColors from '@src/hooks/useColors';
import { fs, hp, SCREEN_HEIGHT } from '@src/themes/dimensions';
import { Short } from '@src/types/post-type';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const PlayerAction = ({ short }: { short: Short }) => {
  const colors = useColors();
  return (
    <View style={styles.actionBar}>
      <TouchableOpacity style={styles.actionButton}>
        <LoveIcon height={36} width={36} />
        <Text style={[styles.actionText, { color: colors.light }]}>
          {formatNumber(short?.like ?? 0)}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <SaveIcon height={36} width={36} />
        <Text style={[styles.actionText, { color: colors.light }]}>
          {formatNumber(short?.favorite ?? 0)}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <ShareIcon height={36} width={36} />
        <Text style={[styles.actionText, { color: colors.light }]}>
          {formatNumber(short?.share ?? 0)}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PlayerAction;

const styles = StyleSheet.create({
  actionBar: {
    paddingHorizontal: 16,
    gap: 28,
    position: 'absolute',
    right: -5,
    bottom: SCREEN_HEIGHT * 0.024,
    alignItems: 'center',
  },
  actionButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  actionText: {
    fontSize: fs(14),
    marginTop: hp(2),
  },
});
