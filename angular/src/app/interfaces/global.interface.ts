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
