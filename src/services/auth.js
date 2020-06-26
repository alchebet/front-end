import { post, get } from "./request";

export const signup = user => post('/api/v1/users/signup', user);
export const login = user => post('/api/v1/users/login', user);
export const verify = () => get('/api/v1/users/verify');
export const logout = () => get('/api/v1/users/logout');
