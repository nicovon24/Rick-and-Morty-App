import axios from "axios"

const API_URL = `http://localhost:5000/api/created_char` 

export const Axios = axios.create({
    withCredentials: true,
    baseURL: API_URL
})