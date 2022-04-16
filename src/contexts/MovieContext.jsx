import { createContext, useState } from 'react';

export const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [movieData, setMovieData] = useState();

  return (
    <MovieContext.Provider value={{ dialogOpen, setDialogOpen, movieData, setMovieData }}>
      {children}
    </MovieContext.Provider>
  );
};
export default MovieContextProvider;
