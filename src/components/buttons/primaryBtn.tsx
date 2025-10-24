import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextProps,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';
import React, { FC, ReactElement } from 'react';
import { hp, spacing } from '@src/themes/dimensions';
import useColors from '@src/hooks/useColors';

type PrimaryBtnProps = TouchableOpacityProps & {
  btnTitle: string;
  TextProps?: TextProps;
  isBtnLoading?: boolean;
  btnContainerStyle?: ViewStyle;
  btnTextStyle?: TextStyle;
  Icon?: ReactElement;
};
const PrimaryBtn: FC<PrimaryBtnProps> = ({
  btnTitle,
  Icon,
  btnContainerStyle,
  isBtnLoading,
  btnTextStyle,
  ...rest
}) => {
  const colors = useColors();
  return (
    <TouchableOpacity
      accessible={true}
      accessibilityLabel={btnTitle}
      accessibilityHint={`btn for ${btnTitle}`}
      style={[
        styles.primaryButton,
        { backgroundColor: colors.primary100 },
        btnContainerStyle,
      ]}
      {...rest}
    >
      {isBtnLoading ? (
        <ActivityIndicator size={'small'} color={btnTextStyle?.color} />
      ) : (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: spacing.sm,
          }}
        >
          {Icon}
          <Text style={[styles.primaryButtonText, btnTextStyle]}>
            {btnTitle}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default PrimaryBtn;

const styles = StyleSheet.create({
  primaryButton: {
    paddingVertical: 16,
    borderRadius: hp(20),
    alignItems: 'center',
  },

  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  textStyle: {
    fontSize: 16,
  },
});
