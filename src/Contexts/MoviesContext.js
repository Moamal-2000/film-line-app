import { createContext, useContext } from "react";

export const MoviesContext = createContext();

export const useMoviesContext = () => {
  return useContext(MoviesContext);
};