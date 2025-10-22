import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTab from './bottom-nav';
import { SCREEN_NAME } from './nav-constant';
import AuthNav from './auth-nav';
import { rootStackParams } from '@src/types/nav-type';
import { useAppSelector } from '@src/store';

const { Navigator, Screen, Group } =
  createNativeStackNavigator<rootStackParams>();

const RootNav = () => {
  const { isLoggedIn, profileDetails } = useAppSelector(state => state.auth);

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      {!isLoggedIn ? (
        AuthNav()
      ) : (
        <>
          <Screen
            name={SCREEN_NAME.bottomNav}
            component={MainTab}
            options={{
              headerShown: false,
            }}
          />
        </>
      )}
    </Navigator>
  );
};

export default RootNav;
