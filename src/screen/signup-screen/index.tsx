import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useCallback, useState } from 'react';
import useColors from '@src/hooks/useColors';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { rootStackParams } from '@src/types/nav-type';
import { SCREEN_NAME } from '@src/navigation/nav-constant';
import AuthInput from '@src/components/forms/AuthInput';
import PrimaryBtn from '@src/components/buttons/primaryBtn';
import styles from './styles';
import { useAppDispatch } from '@src/store';
import { loginUser } from '@src/store/auth-store';

const SignUpScreen = () => {
  const colors = useColors();
  const { navigate } =
    useNavigation<NativeStackNavigationProp<rootStackParams>>();
  const dispatch = useAppDispatch();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const gotoLogin = useCallback(() => {
    navigate(SCREEN_NAME.login);
  }, []);

  const handleSignup = () => {
    // Handle login logic here
    dispatch(loginUser());
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.header}>
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>Sign up to start watching</Text>
        </View>

        {error ? (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        ) : null}

        <View style={styles.form}>
          <AuthInput
            label="Full Name"
            placeholder="Enter your full name"
            editable={!loading}
            keyboardType="email-address"
          />

          <AuthInput
            label="Email"
            placeholder="Enter your email"
            editable={!loading}
            keyboardType="email-address"
          />
          <AuthInput
            label="Password"
            isPassword
            editable={!loading}
            placeholder="create a password"
          />
          <AuthInput
            label="Confirm Password"
            isPassword
            editable={!loading}
            placeholder="Confirm your password"
          />

          <PrimaryBtn
            btnTitle={loading ? 'Creating Account...' : 'Sign Up'}
            onPress={handleSignup}
          />

          <View style={styles.footer}>
            <Text style={styles.footerText}>Already have an account? </Text>
            <Pressable onPress={gotoLogin}>
              <Text style={styles.footerLink}>Sign In</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;
