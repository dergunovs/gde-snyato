export interface IEntity {
  _id?: string;
  dateCreated?: Date | string;
  dateUpdated?: Date | string;
}

export type TUserRole = "admin" | "moderator" | "user";

export interface IUser extends IEntity {
  firstName?: string;
  lastName?: string;
  password?: string;
  email: string;
  dateLoggedIn?: Date | string;
  role: TUserRole;
}

export interface IUserToken {
  _id: string;
  email: string;
  role: TUserRole;
  firstName?: string;
  lastName?: string;
  token?: string;
}

export interface ILoginData {
  email: string;
  password: string;
  role: TUserRole;
}

export interface ISignUpData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface IComment extends IEntity {
  text: string;
  user: IUser;
  isModerated: boolean;
}

export type TSeason = "winter" | "spring" | "summer" | "autumn";

export type TDevice = "phone" | "camera";

export interface IPhoto extends IEntity {
  user: IUser;
  season: TSeason;
  device: TDevice;
  raiting: number;
  comments: IComment[];
  isModerated: boolean;
}

export type TTransport = "car" | "public" | "foot";

export interface ILocation extends IEntity {
  coordinates: [number, number];
  region: string;
  city: string;
  title: string;
  description: string;
  user: IUser;
  photo: string;
  photos: IPhoto[];
  transportAvaliability: { transport: TTransport; raiting: number }[];
  seasonRaitings: { season: TSeason; raiting: number }[];
  raiting: number;
  comments: IComment[];
  isModerated: boolean;
}
