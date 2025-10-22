import { Profile } from '../user-type';

export type authStoreType = {
  isLoggedIn: boolean;
  profileDetails: Profile | null;
};
