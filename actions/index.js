import axios from 'axios';

const BASE_URL = 'http://localhost:3001';
export const getMovies = () => {
  return axios.get(`${BASE_URL}/api/v1/movies`).then(res => res.data);
};

export const getMovieById = id => {
  return axios.get(`${BASE_URL}/api/v1/movie/${id}`).then(res => res.data);
};

export const createMovie = movie => {
  movie.id = Math.random()
    .toString(32)
    .substr(2, 5);
  return axios.post(`${BASE_URL}/api/v1/movies`, movie).then(res => res.data);
};

export const deleteMovie = id => {
  return axios.delete(`${BASE_URL}/api/v1/movie/${id}`).then(res => res.data);
};

export const updateMovie = movie => {
  return axios
    .patch(`${BASE_URL}/api/v1/movies/${movie.id}`, movie)
    .then(res => res.data);
};

export const getPosts = () => {
  return axios.get(`${BASE_URL}/api/v1/posts`).then(res => res.data);
};
