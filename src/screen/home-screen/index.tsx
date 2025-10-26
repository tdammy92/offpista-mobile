import HeroSection from '@src/components/common/HeroSection';
import Section from '@src/components/common/Section';
import { useFirestoreCollection } from '@src/services/query';
import { Category, Movie, Short } from '@src/types/post-type';
import React, { useMemo } from 'react';
import { ScrollView } from 'react-native';
import styles from './styles';
import { shufflePost } from '@src/helper/utils';
import Categories from '@src/components/common/Categories';

const HomeScreen = () => {
  const { data: movies } = useFirestoreCollection<Movie>('movies');
  const { data: shorts } = useFirestoreCollection<Short>('shorts');
  const { data: categories } = useFirestoreCollection<Category>('categories');

  const heroData = useMemo(() => shorts?.[1], [shorts]);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <HeroSection heroData={heroData} />
      <Section
        title="Continue watching"
        data={[...shufflePost(movies ?? [])]}
      />
      <Section title="Most Trending" data={[...movies]?.reverse() ?? []} />

      <Categories title="By category" data={categories ?? []} />
      <Section title="For you" data={[...movies]?.reverse() ?? []} />
    </ScrollView>
  );
};

export default HomeScreen;
