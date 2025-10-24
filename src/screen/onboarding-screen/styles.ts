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
});
export default styles;
