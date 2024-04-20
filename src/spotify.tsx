import axios from "axios";

const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = "14aa2fdfcc1a4eccbf2ceb89bfdd63d2";
const redirectUri = "http://localhost:5173/";
{/*const clientSecret = "dfc05dad01be420cb5fe527505cc5db1";*/}
const scopes = ["user-library-read", "playlist-read-private"];




export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});

export const setClientToken = (token: string) => {
  apiClient.interceptors.request.use(async function (config) {
    config.headers.Authorization = "Bearer " + token;
    return config;
  });
};

export default apiClient;