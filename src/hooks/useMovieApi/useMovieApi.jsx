import { useState } from 'react';
import axios from 'axios';

export default function useMovieApi() {
  const [status, setStatus] = useState({ error: false, loading: false, data: [] });

  async function fetchData({ search, param }) {
    setStatus({ ...status, loading: true });
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?${param}=${search}&apikey=${process.env.REACT_APP_OMDBAPI_KEY}`
      );
      setStatus({ ...status, loading: false, data: response.data });
      return response.data;
    } catch (error) {
      setStatus({ ...status, loading: false, error });
      return error;
    }
  }

  return { ...status, fetchData };
}
