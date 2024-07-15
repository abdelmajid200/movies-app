import axios from 'axios';

export const fetchMovies = async (query = '') => {
  const url = query
    ? `https://api.themoviedb.org/3/search/movie`
    : `https://api.themoviedb.org/3/movie/popular`;
  try {
    const response = await axios.get(url, {
      params: {
        api_key: '41b27efbe106872c1a8c16bce9e628ab',
        language: 'en-US',
        query: query,
        page: 1, 
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};
