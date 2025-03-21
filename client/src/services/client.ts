import axios from "axios";

const client = axios.create({
  baseURL: `${process.env.VITE_API_URL}/`,
});

export default client;