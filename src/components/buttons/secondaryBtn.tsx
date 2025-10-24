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

type SecondaryBtnProps = TouchableOpacityProps & {
  btnTitle: string;
  TextProps?: TextProps;
  isBtnLoading?: boolean;
  btnContainerStyle?: ViewStyle;
  btnTextStyle?: TextStyle;
  Icon?: ReactElement;
};
const SecondaryBtn: FC<SecondaryBtnProps> = ({
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
      style={[styles.secondaryButton, btnContainerStyle]}
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
          <Text
            style={[
              styles.secondaryButtonText,
              btnTextStyle,
              { color: colors.light },
            ]}
          >
            {btnTitle}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default SecondaryBtn;

const styles = StyleSheet.create({
  secondaryButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingVertical: 16,
    borderRadius: hp(20),
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },

  secondaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
