export interface Short {
  id: string;
  isLiked: boolean;
  postUrl: string;
  isFavorite: boolean;
  postType: string;
  title: string;
  favorite: number;
  isShared: boolean;
  share: number;
  like: number;
  description: string;
  thumbnail: string;
}

export interface Movie {
  id: string;
  title: string;
  description: string;
  backdrop: string;
  thumbnail: string;
  trailer: string;
}
export interface Category {
  id: string;
  name: string;
}
