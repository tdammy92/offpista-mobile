import { hp, wp } from '@src/themes/dimensions';
import { ViewStyle, StyleSheet, TextStyle, ImageStyle } from 'react-native';

interface Styles {
  container: ViewStyle;
  header: ViewStyle;
  headerTitle: TextStyle;
  searchButton: ViewStyle;
  feedItem: ViewStyle;
  feedImage: ImageStyle;
  feedContent: ViewStyle;
  profileSection: ViewStyle;
  avatar: ViewStyle;
  username: TextStyle;
  subtitle: TextStyle;
  watchButton: ViewStyle;
  watchButtonText: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
  },
  searchButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  feedItem: {
    marginBottom: 32,
  },
  feedImage: {
    width: '100%',
    height: 400,
  },
  feedContent: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileSection: {
    flexDirection: 'row',
    gap: 12,
    flex: 1,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(229, 9, 20, 0.3)',
    borderWidth: 2,
    borderColor: '#E50914',
  },
  username: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.6)',
    lineHeight: 16,
  },
  watchButton: {
    backgroundColor: '#E50914',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
  },
  watchButtonText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },
});
export default styles;
