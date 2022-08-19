import { useState } from "react";
import axios from "axios";

export function useMovieApi() {
  const [status, setStatus] = useState({
    error: false,
    loading: false,
    data: [],
  });

  async function fetchData({ search, param }) {
    setStatus({ ...status, loading: true });
    let response;
    try {
      response = await axios.get(
        `http://www.omdbapi.com/?${param}=${search}&apikey=${process.env.REACT_APP_OMDBAPI_KEY}`
      );
    } catch (error) {
      setStatus({ ...status, loading: false, error });
    } finally {
      setStatus({ ...status, loading: false, data: response.data });
    }
    return response.data;
  }

  return { ...status, fetchData };
}

export default useMovieApi;
