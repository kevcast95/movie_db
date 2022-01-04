import axios from "axios";

export const getPopularMovies = (page = 1) => {
 const url = `https://api.themoviedb.org/3/movie/popular?api_key=21d48dd94eb2105951a273ec15768f0a&language=en-US&page=${page}`
 return axios({
  method: 'GET',
  url
 })
}

export const getMovieDetails = (movie_id) => {
 const url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=21d48dd94eb2105951a273ec15768f0a&language=en-US`
 return axios({
  method: 'GET',
  url
 })
}


