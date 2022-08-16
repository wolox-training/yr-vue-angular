export interface IFields {
  key: string;
  label: string;
  type: string;
  errorMessage: string;
}

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  locale?: string;
}

export interface IAuthUser {
  token: string;
  uid: string;
  client: string;
}

export interface IBook {
  author: string;
  createdAt: string;
  editor: string;
  genre: string;
  id: number;
  imageUrl: string;
  title: string;
  updatedAt: string;
  year: string;
}
