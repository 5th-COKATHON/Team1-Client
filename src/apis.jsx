import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const instance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true
});
export const apiLogin = async (email) =>
    await instance.post('/api/members', email);

export const apiGetPoint = async (memberId) =>
    await instance.get(`/api/members/${memberId}/point`);

export const apiGetEmotion = async (memberId) =>
    await instance.get(`/api/members/${memberId}/emotions`);
