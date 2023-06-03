export interface IComment {
  id: number;
  name: string;
}
export interface IRequestWithUser {
  user: IUser[];
}
export interface IUser {
  sub: number;
  email: string;
  password: string;
  refreshToken: string;
}

export interface IPost {
  id: number;
  title: string;
  description: string;
}
export interface IAuth {
  authorization: string;
}
