import { api } from '@/config/api';

export const signUp = (data) => api.post('/users', data);

export const signIn = (data) => api.post('/users/sign_in', data);
