import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useMovieApi() {
  const [status, setStatus] = useState({ error: false, loading: false, data: [] });
  const [search] = useState('super');

  async function fetchData() {
    setStatus({ ...status, loading: true });
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?s=${search}&apikey=${process.env.REACT_APP_OMDBAPI_KEY}`
      );
      setStatus({ ...status, loading: false, data: response.data });
    } catch (error) {
      setStatus({ ...status, loading: false, error });
    }
  }

  useEffect(() => {
    fetchData();
    // disabling this because I really do want this to run only once and I don't need the deps array to be filled out
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return status;
}
