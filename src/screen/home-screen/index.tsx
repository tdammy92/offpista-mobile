import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { Play, Search } from 'lucide-react-native';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Home</Text>
        <Pressable style={styles.searchButton}>
          <Search size={24} color="#fff" />
        </Pressable>
      </View>

      <View style={styles.heroSection}>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/7991319/pexels-photo-7991319.jpeg?auto=compress&cs=tinysrgb&w=800',
          }}
          style={styles.heroImage}
          resizeMode="cover"
        />
        <LinearGradient
          colors={['transparent', 'rgba(10, 10, 10, 0.8)', '#0A0A0A']}
          style={styles.heroGradient}
        >
          <View style={styles.heroContent}>
            <View style={styles.genreTags}>
              <Text style={styles.genreTag}>Action</Text>
              <Text style={styles.genreTag}>Detective</Text>
              <Text style={styles.genreTag}>Crime</Text>
            </View>
            <Pressable style={styles.playButton}>
              <Play size={20} color="#fff" fill="#fff" />
              <Text style={styles.playButtonText}>Play</Text>
            </Pressable>
          </View>
        </LinearGradient>
        <View style={styles.profileBadge}>
          <View style={styles.profileImage} />
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Continue watching</Text>
          <Pressable>
            <Text style={styles.seeMore}>›</Text>
          </Pressable>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScroll}
        >
          {[1, 2, 3].map(item => (
            <Pressable key={item} style={styles.contentCard}>
              <Image
                source={{
                  uri: `https://images.pexels.com/photos/7991319/pexels-photo-7991319.jpeg?auto=compress&cs=tinysrgb&w=400`,
                }}
                style={styles.contentImage}
              />
              <View style={styles.progressBar}>
                <View
                  style={[styles.progressFill, { width: `${item * 30}%` }]}
                />
              </View>
            </Pressable>
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Most Trending</Text>
          <Pressable>
            <Text style={styles.seeMore}>›</Text>
          </Pressable>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScroll}
        >
          {[
            { title: 'Black Doves', genre: 'SERIES • DRAMA' },
            { title: 'No Good Deed', genre: 'SERIES • DRAMA' },
            { title: 'No Good Deed', genre: 'SERIES • DRAMA' },
          ].map((item, index) => (
            <View key={index} style={styles.trendingCard}>
              <Image
                source={{
                  uri: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
                }}
                style={styles.trendingImage}
              />
              <Text style={styles.trendingTitle}>{item.title}</Text>
              <Text style={styles.trendingGenre}>{item.genre}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>By category</Text>
          <Pressable>
            <Text style={styles.seeMore}>›</Text>
          </Pressable>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScroll}
        >
          {['Drama', 'Crime', 'Comedy', 'Action'].map(category => (
            <Pressable key={category} style={styles.categoryButton}>
              <Text style={styles.categoryText}>{category}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>For you</Text>
          <Pressable>
            <Text style={styles.seeMore}>›</Text>
          </Pressable>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScroll}
        >
          {[1, 2, 3].map(item => (
            <View key={item} style={styles.forYouCard}>
              <Image
                source={{
                  uri: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=400',
                }}
                style={styles.forYouImage}
              />
              <Text style={styles.forYouTitle}>House</Text>
              <Text style={styles.forYouGenre}>SERIES • DRAMA</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
