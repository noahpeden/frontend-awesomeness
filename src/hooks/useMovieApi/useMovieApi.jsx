import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useMovieApi() {
  const [status, setStatus] = useState({ error: false, loading: false, data: [] });
  const [search] = useState('super');

  const fetchData = async () => {
    setStatus({ ...status, loading: true });
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?s=${search}&apikey=${process.env.REACT_APP_OMDBAPI_KEY}`
      );
      setStatus({ ...status, loading: false, data: response.data });
    } catch (error) {
      setStatus({ ...status, loading: false, error });
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return status;
}
