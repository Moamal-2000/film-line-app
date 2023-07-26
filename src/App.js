import { createContext, useContext, useState } from "react";
import API from "./API/movies.json";
import styles from "./App.module.scss";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";

const MoviesContext = createContext();

export const useMoviesContext = () => {
  return useContext(MoviesContext);
};

function App() {
  const [movies] = useState(API);

  const moviesContextValue = {
    movies,
  };

  return (
    <div className={styles.App}>
      <MoviesContext.Provider value={moviesContextValue}>
        <Header />
        <Main />
      </MoviesContext.Provider>
    </div>
  );
}

export default App;
