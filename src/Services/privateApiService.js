import axios from "axios";

// a futuro agregar Bearer.  headers: {'Authorization': 'Bearer '+ token}
export const privateApi = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 5000,
});
