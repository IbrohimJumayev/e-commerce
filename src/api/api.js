import axios from "axios";
const api_url = "https://headphones-server.onrender.com";

const api = axios.create({
    baseURL: `${api_url}`
});

export default api