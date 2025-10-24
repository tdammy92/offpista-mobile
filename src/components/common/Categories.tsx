import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { memo } from 'react';
import { Category as CategoryT, Movie } from '@src/types/post-type';
import { ChevronRight } from 'lucide-react-native';
import useColors from '@src/hooks/useColors';
import { fs, hp } from '@src/themes/dimensions';
import stringToColor from 'string-to-color';
import { FormatText, lightenColor } from '@src/helper/utils';
import LinearGradient from 'react-native-linear-gradient';

interface CategorisProps {
  title: string;
  data: CategoryT[];
}

const Category = ({ item, index }: { item: CategoryT; index: number }) => {
  const bgColor = stringToColor(item.id);
  const bgColorLight = lightenColor(bgColor, 0.4);
  const colors = useColors();

  return (
    <LinearGradient
      start={{ x: 1, y: 0.4 }}
      end={{ x: 0, y: 0.5 }}
      colors={[bgColor, bgColorLight]}
      style={{
        borderRadius: hp(10),
        marginLeft: index === 0 ? hp(16) : hp(12),
      }}
    >
      <View style={[styles.categoryWrapper]}>
        <Text style={[styles.categoryText, { color: colors.light }]}>
          {FormatText(item?.name)}
        </Text>
      </View>
    </LinearGradient>
  );
};

const Categories = ({ title, data }: CategorisProps) => {
  const colors = useColors();
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={[styles.sectionTitle, { color: colors.light }]}>
          {title}
        </Text>
        <TouchableOpacity>
          <ChevronRight color={colors.light} />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item, index) => (
          <Category key={`${item?.id}-${index}`} item={item} index={index} />
        ))}
      </ScrollView>
    </View>
  );
};

export default memo(Categories);

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
  },
  seeMore: {
    fontSize: 24,
    color: 'rgba(255, 255, 255, 0.6)',
  },
  categoryWrapper: {
    height: hp(80),
    width: hp(146),
    borderRadius: hp(10),
    padding: hp(12),
    justifyContent: 'flex-end',
  },
  categoryText: {
    fontSize: fs(21),
    fontWeight: 'bold',
  },
});
