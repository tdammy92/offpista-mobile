import { hp, wp } from '@src/themes/dimensions';
import { ViewStyle, StyleSheet, TextStyle } from 'react-native';

interface Styles {
  container: ViewStyle;
  header: ViewStyle;
  headerTitle: TextStyle;
  profileSection: ViewStyle;
  avatarLarge: ViewStyle;
  profileName: TextStyle;
  profileEmail: TextStyle;
  menuSection: ViewStyle;
  menuItem: ViewStyle;
  menuItemLeft: ViewStyle;
  menuItemText: TextStyle;
  menuItemArrow: TextStyle;
  signOutItem: ViewStyle;
  signOutText: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: 40,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  avatarLarge: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(229, 9, 20, 0.2)',
    borderWidth: 3,
    borderColor: '#E50914',
    marginBottom: 16,
  },
  profileName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.6)',
  },
  menuSection: {
    paddingTop: 24,
    paddingHorizontal: 16,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.05)',
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  menuItemText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
  },
  menuItemArrow: {
    fontSize: 24,
    color: 'rgba(255, 255, 255, 0.6)',
  },
  signOutItem: {
    borderBottomWidth: 0,
    marginTop: 16,
  },
  signOutText: {
    color: '#E50914',
  },
});
export default styles;
