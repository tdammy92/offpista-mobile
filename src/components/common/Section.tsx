import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { memo } from 'react';
import MovieCard from './MovieCard';
import { Movie } from '@src/types/post-type';
import { ChevronRight } from 'lucide-react-native';
import useColors from '@src/hooks/useColors';

interface SectionProps {
  title: string;
  data: Movie[];
}

const Section = ({ title, data }: SectionProps) => {
  const colors = useColors();
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <TouchableOpacity>
          <ChevronRight color={colors.light} />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item, index) => (
          <MovieCard key={`${item?.id}-${index}`} item={item} index={index} />
        ))}
      </ScrollView>
    </View>
  );
};

export default memo(Section);

const styles = StyleSheet.create({
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
});
