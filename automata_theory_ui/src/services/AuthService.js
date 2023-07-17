import axios from "axios";
import API_HOST from "../config";

const TOKEN_URL = API_HOST + '/api/token/';
const REFRESH_URL =  API_HOST + '/api/token/refresh/';
const AuthService = {
    login: async (username, password) => {
        const response = await axios.post(TOKEN_URL, {
            username,
            password,
        });
        console.log(response)
        return response;
    },
    refreshAccessToken: async (refreshToken) => {
        const response = await axios.post(REFRESH_URL, {
            refresh: refreshToken,
        });
        return response;
    }
}

export default AuthService;