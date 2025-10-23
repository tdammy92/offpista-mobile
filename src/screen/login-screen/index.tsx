import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import AuthInput from '@src/components/forms/AuthInput';
import useColors from '@src/hooks/useColors';
import PrimaryBtn from '@src/components/buttons/primaryBtn';

const LoginScreen = () => {
  const colors = useColors();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Handle login logic here
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
          <Text style={styles.title}>Welcome Back</Text>
          <Text style={styles.subtitle}>Sign in to continue watching</Text>
        </View>

        {error ? (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        ) : null}

        <View style={styles.form}>
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
            placeholder="Enter your password"
          />

          <PrimaryBtn
            btnTitle={loading ? 'Signing In...' : 'Sign In'}
            onPress={handleLogin}
          />

          <View style={styles.footer}>
            <Text style={styles.footerText}>Don't have an account? </Text>
            <Pressable>
              <Text style={styles.footerLink}>Sign Up</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
