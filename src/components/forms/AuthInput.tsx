import useColors from '@src/hooks/useColors';
import { hp } from '@src/themes/dimensions';
import { Eye, EyeOff } from 'lucide-react-native';
import React, { forwardRef, useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';

type CustomProps = {
  label: string;
  error?: string;
  isPassword?: boolean;
};

type AuthInputProps = TextInputProps & CustomProps;

const AuthInput = forwardRef<TextInput, AuthInputProps>(
  (props: AuthInputProps, ref) => {
    const { label, error, isPassword, value } = props;
    const colors = useColors();
    const [IsFocused, setIsFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    return (
      <View style={[]}>
        <View style={styles.inputContainer}>
          <Text style={[styles.label, { color: colors.light }]}>{label}</Text>

          <View style={isPassword ? styles.passwordContainer : undefined}>
            <TextInput
              ref={ref}
              autoCapitalize="none"
              autoCorrect={false}
              autoComplete="off"
              cursorColor={colors.primary}
              placeholderTextColor={colors.textSecondary}
              secureTextEntry={isPassword && !showPassword}
              style={[
                isPassword ? styles.passwordInput : styles.input,
                { color: colors.light },
              ]}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              {...props}
            />

            {isPassword && (
              <Pressable
                style={styles.eyeIcon}
                onPress={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff size={20} color="rgba(255, 255, 255, 0.6)" />
                ) : (
                  <Eye size={20} color="rgba(255, 255, 255, 0.6)" />
                )}
              </Pressable>
            )}
          </View>
        </View>
        {error && (
          <Text aria-label={`${value} error`} style={styles.errorText}>
            {error}
          </Text>
        )}
      </View>
    );
  },
);

export default AuthInput;

const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    paddingVertical: hp(5),
    fontSize: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
  },
  eyeIcon: {
    paddingHorizontal: 16,
  },
  inputContainer: {
    gap: 8,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 16,
  },

  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 16,
  },
});
