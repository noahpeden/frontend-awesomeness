import { createContext, useState } from 'react';

export const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [movieData, setMovieData] = useState();
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <MovieContext.Provider
      value={{ dialogOpen, setDialogOpen, movieData, setMovieData, mobileOpen, setMobileOpen }}
    >
      {children}
    </MovieContext.Provider>
  );
};
export default MovieContextProvider;
