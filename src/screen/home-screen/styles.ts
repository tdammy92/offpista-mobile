import { hp, wp } from '@src/themes/dimensions';
import { ViewStyle, StyleSheet, TextStyle, ImageStyle } from 'react-native';

interface Styles {
  container: ViewStyle;
  header: ViewStyle;
  headerTitle: TextStyle;
  searchButton: ViewStyle;
  heroSection: ViewStyle;
  heroImage: ImageStyle;
  heroGradient: ViewStyle;
  heroContent: ViewStyle;
  genreTags: ViewStyle;
  genreTag: TextStyle;
  playButton: ViewStyle;
  playButtonText: TextStyle;
  profileBadge: ViewStyle;
  profileImage: ViewStyle;
  section: ViewStyle;
  sectionHeader: ViewStyle;
  sectionTitle: TextStyle;
  seeMore: TextStyle;
  horizontalScroll: ViewStyle;
  contentCard: ViewStyle;
  contentImage: ImageStyle;
  progressBar: ViewStyle;
  progressFill: ViewStyle;
  trendingCard: ViewStyle;
  trendingImage: ImageStyle;
  trendingTitle: TextStyle;
  trendingGenre: TextStyle;
  categoryButton: ViewStyle;
  categoryText: TextStyle;
  forYouCard: ViewStyle;
  forYouImage: ImageStyle;
  forYouTitle: TextStyle;
  forYouGenre: TextStyle;
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
  heroSection: {
    height: 400,
    position: 'relative',
    marginBottom: 24,
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  heroGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 200,
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  heroContent: {
    gap: 16,
  },
  genreTags: {
    flexDirection: 'row',
    gap: 8,
  },
  genreTag: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 12,
    fontWeight: '600',
  },
  playButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 6,
    gap: 8,
    alignSelf: 'flex-start',
  },
  playButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  profileBadge: {
    position: 'absolute',
    top: 60,
    right: 16,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(229, 9, 20, 0.2)',
    borderWidth: 2,
    borderColor: '#E50914',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  section: {
    marginBottom: 32,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },
  seeMore: {
    fontSize: 24,
    color: 'rgba(255, 255, 255, 0.6)',
  },
  horizontalScroll: {
    paddingLeft: 16,
  },
  contentCard: {
    width: 140,
    marginRight: 12,
  },
  contentImage: {
    width: 140,
    height: 200,
    borderRadius: 8,
  },
  progressBar: {
    width: '100%',
    height: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginTop: 8,
    borderRadius: 2,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#E50914',
    borderRadius: 2,
  },
  trendingCard: {
    width: 120,
    marginRight: 12,
  },
  trendingImage: {
    width: 120,
    height: 180,
    borderRadius: 8,
    marginBottom: 8,
  },
  trendingTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 4,
  },
  trendingGenre: {
    fontSize: 11,
    color: 'rgba(255, 255, 255, 0.6)',
  },
  categoryButton: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: 'rgba(30, 144, 255, 0.2)',
    borderRadius: 20,
    marginRight: 12,
  },
  categoryText: {
    color: '#1E90FF',
    fontSize: 14,
    fontWeight: '600',
  },
  forYouCard: {
    width: 140,
    marginRight: 12,
  },
  forYouImage: {
    width: 140,
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  forYouTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 4,
  },
  forYouGenre: {
    fontSize: 11,
    color: 'rgba(255, 255, 255, 0.6)',
  },
});
export default styles;
