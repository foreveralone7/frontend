import axios from "axios";
const apiUrl ='http://127.0.0.1:8000/api';

const register = async (data) => {
  return await axios.post(`${apiUrl}/register`, data).then((res) => res.data);
};

// console.log('api', import.meta.env.VITE_API_BASE_URL);
const login = async (data) => {
  return await axios.post(`${apiUrl}/login`, data).then((res) => res.data);
};

export default {
  login,
  register,
};
