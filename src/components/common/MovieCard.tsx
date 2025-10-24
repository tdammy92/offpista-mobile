import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Movie } from '@src/types/post-type';
import { fs, hp, wp } from '@src/themes/dimensions';

const MovieCard = ({ item, index }: { item: Movie; index?: number }) => {
  return (
    <TouchableOpacity
      key={item?.id}
      style={[styles.forYouCard, { marginLeft: index === 0 ? hp(16) : hp(12) }]}
    >
      <Image
        source={{
          uri: item?.thumbnail,
        }}
        style={styles.thumbnail}
      />
      <Text style={styles.forYouTitle}>{item?.title}</Text>
      <Text style={styles.forYouGenre}>SERIES • DRAMA</Text>
    </TouchableOpacity>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  forYouCard: {
    width: 140,
    marginRight: 12,
  },
  thumbnail: {
    width: wp(146),
    height: hp(220),
    borderRadius: hp(10),
    marginBottom: 8,
  },
  forYouTitle: {
    fontSize: fs(14),
    fontWeight: '600',
    color: '#fff',
    marginBottom: 4,
  },
  forYouGenre: {
    fontSize: 11,
    color: 'rgba(255, 255, 255, 0.6)',
  },
});
