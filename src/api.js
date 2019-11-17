
import axios from 'axios';

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "737b40b03377f73eeb19c912b576f026",
        language: "en-US"
    }
});

export const moviesApi = {
    nowPlaying: () => api.get("movie/now_playing"),
    upcoming: () => api.get("movie/upcoming"),
    popular: () => api.get("movie/popular")
};

export const tvApi = {
    popular: () => api.get("tv/popular"),
    topRated: () => api.get("tv/top_rated"),
    airingToday: () => api.get("tv/airing_today")
};