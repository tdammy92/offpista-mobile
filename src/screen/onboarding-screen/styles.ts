import { hp, wp } from '@src/themes/dimensions';
import { ViewStyle, StyleSheet, TextStyle } from 'react-native';

interface Styles {
  backgroundImage: ViewStyle;
  gradient: ViewStyle;
  content: ViewStyle;
  heroSection: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
  bottomSection: ViewStyle;
  primaryButton: ViewStyle;
  primaryButtonText: TextStyle;
  secondaryButton: ViewStyle;
  secondaryButtonText: TextStyle;
}
const styles = StyleSheet.create<Styles>({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  gradient: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: hp(140),
    paddingBottom: hp(60),
    paddingHorizontal: wp(24),
  },
  heroSection: {
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: hp(16),
    lineHeight: 42,
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
    lineHeight: 24,
  },
  bottomSection: {
    gap: 16,
  },
  primaryButton: {
    backgroundColor: '#E50914',
    paddingVertical: hp(16),
    borderRadius: hp(20),
    alignItems: 'center',
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingVertical: hp(16),
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
export default styles;
