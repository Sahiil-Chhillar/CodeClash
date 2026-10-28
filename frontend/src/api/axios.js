import axios from 'axios';

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
  // baseURL: "https://codebet-backend.onrender.com/api", or your backend URL
});

export default instance;