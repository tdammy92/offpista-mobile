import {
  createNavigationContainerRef,
  NavigationContainerRef,
} from '@react-navigation/native';
import { rootStackParams } from '@src/types/nav-type';

export const navigationRef =
  createNavigationContainerRef<NavigationContainerRef<rootStackParams>>();

export function CustomNavigate(name: any, params?: Object) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
