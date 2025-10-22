import { ImageBackground, Pressable, Text, View } from 'react-native';
import React, { useCallback } from 'react';
import Container from '@src/components/common/Container';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { rootStackParams } from '@src/types/nav-type';
import { SCREEN_NAME } from '@src/navigation/nav-constant';
import useColors from '@src/hooks/useColors';

const OnBordingScreen = () => {
  const colors = useColors();
  const { navigate } =
    useNavigation<NativeStackNavigationProp<rootStackParams>>();

  const gotoSignUp = useCallback(() => {
    navigate(SCREEN_NAME.signup);
  }, []);

  const gotoLogin = useCallback(() => {
    navigate(SCREEN_NAME.login);
  }, []);

  return (
    <Container style={{ alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground
        source={{
          uri: 'https://images.pexels.com/photos/7991319/pexels-photo-7991319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        }}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <LinearGradient
          colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.8)', 'rgba(0,0,0,0.95)']}
          style={styles.gradient}
        >
          <View style={styles.content}>
            <View style={styles.heroSection}>
              <Text style={[styles.title, { color: colors.light }]}>
                Offpista, Watch Unlimited{'\n'}Movies & Shorts
              </Text>
              <Text style={styles.subtitle}>
                Stream your favorite content anytime, anywhere
              </Text>
            </View>

            <View style={styles.bottomSection}>
              <Pressable style={styles.primaryButton} onPress={gotoSignUp}>
                <Text
                  style={[styles.primaryButtonText, { color: colors.light }]}
                >
                  Get Started
                </Text>
              </Pressable>

              <Pressable style={styles.secondaryButton} onPress={gotoLogin}>
                <Text
                  style={[styles.secondaryButtonText, { color: colors.light }]}
                >
                  I Already Have an Account
                </Text>
              </Pressable>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </Container>
  );
};

export default OnBordingScreen;
