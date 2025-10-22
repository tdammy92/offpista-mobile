export interface RegisterPayload {
  phone: string;
  password: string;
  first_name: string;
  last_name: string;
  email: string;
}

export interface LoginPayload {
  username: string;
  password: string;
}
