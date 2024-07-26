export interface SignupRequest {
  name: string;
  username: string;
  password: string;
  passwordConfirm: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

export interface LogoutRequest {
  refreshToken: string;
}

export interface Authentication {
  isAuthenticated: boolean;
  id: number;
  accessToken: string;
  refreshToken: string;
}
