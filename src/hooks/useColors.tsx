import { useTheme } from '@react-navigation/native';
import { lighThemeT } from '@src/themes/light-theme';

const useColors = () => {
  const { colors } = useTheme() as unknown as { colors: lighThemeT['colors'] };
  return colors;
};

export default useColors;
