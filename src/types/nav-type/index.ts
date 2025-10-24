import { SCREEN_NAME } from '@src/navigation/nav-constant';

//root stack navigations
export type rootStackParams = {
  [SCREEN_NAME.onboarding]: undefined;
  [SCREEN_NAME.login]: undefined;
  [SCREEN_NAME.signup]: undefined;
  [SCREEN_NAME.bottomNav]: undefined;
};

//bottom screen type
export type BottomMenuParams = {
  [SCREEN_NAME.home]: undefined;
  [SCREEN_NAME.shorts]: {
    postId?: string;
    seekTo?: number;
  };
  [SCREEN_NAME.reward]: undefined;
  [SCREEN_NAME.profile]: undefined;
};
