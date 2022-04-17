import { useState } from 'react';
import axios from 'axios';

export function useMovieApi() {
  const [status, setStatus] = useState({ error: false, loading: false, data: [] });

  async function fetchData({ search, param }) {
    setStatus({ ...status, loading: true });
    let response;
    try {
      response = await axios.get(
        `http://www.omdbapi.com/?${param}=${search}&apikey=${process.env.REACT_APP_OMDBAPI_KEY}`
      );
      setStatus({ ...status, loading: false, data: response.data });
      response = response.data;
    } catch (error) {
      setStatus({ ...status, loading: false, error });
      response = error;
    }

    return response;
  }

  return { ...status, fetchData };
}

export default useMovieApi;
