import { useFocusEffect, useNavigation } from '@react-navigation/native';
import useColors from '@src/hooks/useColors';
import { hp, SCREEN_HEIGHT, wp } from '@src/themes/dimensions';
import { Short } from '@src/types/post-type';
import { Play, Search } from 'lucide-react-native';
import React, { useCallback, useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { OnProgressData, VideoRef } from 'react-native-video';
import VideoPlayer from '../player/videoPlayer';
import { SCREEN_NAME } from '@src/navigation/nav-constant';
import { BottomMenuParams } from '@src/types/nav-type';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface HeroSectionProps {
  heroData: Short;
}
const HeroSection = ({ heroData }: HeroSectionProps) => {
  const videoRef = useRef<VideoRef>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const colors = useColors();
  const videoStatusRef = useRef<number>(null);
  const navigation =
    useNavigation<NativeStackNavigationProp<BottomMenuParams>>();

  const play = () => {
    if (!videoRef.current) return;
    videoRef.current?.resume();
  };

  const stop = () => {
    if (!videoRef.current) return;
    videoRef.current?.pause();
  };

  useFocusEffect(
    useCallback(() => {
      // Start playing video after 3 seconds when screen is focused
      timeoutRef.current = setTimeout(() => {
        play();
      }, 3000);

      return () => {
        // Clean up when screen is unfocused
        stop();
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }, []),
  );

  const handleViewShort = useCallback(() => {
    const currentTime = videoStatusRef.current ?? 0;

    // stop local playback and clear pending play timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    stop();

    navigation.navigate(SCREEN_NAME.shorts, {
      postId: heroData?.id,
      seekTo: currentTime,
    });
  }, [heroData?.id, navigation]);

  return (
    <View style={[styles.heroSection, { height: SCREEN_HEIGHT * 0.7 }]}>
      <VideoPlayer
        videoRef={videoRef}
        source={{
          uri: heroData?.postUrl,
        }}
        poster={{ source: { uri: heroData?.thumbnail }, resizeMode: 'cover' }}
        repeat={true}
        muted={true}
        resizeMode={'cover'}
        onProgress={(e: OnProgressData) => {
          videoStatusRef.current = e.currentTime;
        }}
      />
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: SCREEN_HEIGHT * 0.08,
          left: 20,
          padding: 8,
          borderRadius: 8,
        }}
      >
        <Search color={colors.light} size={hp(30)} />
      </TouchableOpacity>
      <LinearGradient
        colors={['transparent', 'rgba(10, 10, 10, 0.8)', '#0A0A0A']}
        style={styles.heroGradient}
      >
        <View style={styles.heroContent}>
          <View style={styles.genreTags}>
            <Text style={styles.genreTag}>Action</Text>
            <Text style={styles.genreTag}>Drama</Text>
            <Text style={styles.genreTag}>Crime</Text>
          </View>
          <TouchableOpacity
            style={[styles.playButton, { backgroundColor: colors.light }]}
            onPress={handleViewShort}
          >
            <Play size={24} fill={colors.dark} />
            <Text style={styles.playButtonText}>Play</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

export default HeroSection;

const styles = StyleSheet.create({
  heroSection: {
    position: 'relative',
    marginBottom: 24,
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  heroGradient: {
    position: 'absolute',
    bottom: -25,
    left: 0,
    right: 0,
    height: 200,
    width: '100%',
    justifyContent: 'flex-end',

    paddingBottom: 24,
  },
  heroContent: {
    gap: 16,
    alignItems: 'center',
  },
  genreTags: {
    flexDirection: 'row',
    gap: 8,
  },
  genreTag: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 14,
    fontWeight: '600',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.7)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: hp(8),
  },
  playButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(40),
    width: wp(150),
    borderRadius: 6,
    gap: 8,
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
});
