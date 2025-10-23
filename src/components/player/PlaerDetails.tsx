import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Short } from '@src/types/post-type';
import useColors from '@src/hooks/useColors';
import { fs, hp, SCREEN_HEIGHT, wp } from '@src/themes/dimensions';
import PrimaryBtn from '../buttons/primaryBtn';
import { Play } from 'lucide-react-native';

const PlayerDetails = ({ short }: { short: Short }) => {
  const colors = useColors();
  return (
    <View style={[styles.wrapper]}>
      <View>
        <Text style={[styles.title, { color: colors.light }]}>
          {short?.title}
        </Text>
        <Text style={[styles.desc, { color: colors.light }]}>
          {short?.description}
        </Text>
      </View>
      <PrimaryBtn
        btnTitle="Watch Now"
        btnContainerStyle={{
          borderRadius: hp(10),
          marginTop: hp(10),
          maxWidth: wp(210),
          height: hp(37),
          paddingVertical: hp(10),
          backgroundColor: colors.primary100,
        }}
        btnTextStyle={{ fontWeight: 'bold' }}
        Icon={<Play size={hp(20)} fill={colors.light} color={colors.light} />}
      />
    </View>
  );
};

export default PlayerDetails;

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: SCREEN_HEIGHT * 0.02,
    left: 16,
    maxWidth: '70%',
  },
  title: {
    fontSize: fs(18),
    fontWeight: 'bold',
    lineHeight: 23,
  },
  desc: {
    fontSize: fs(16),
    fontWeight: '500',
    lineHeight: 20,
    marginTop: hp(8),
  },
});
