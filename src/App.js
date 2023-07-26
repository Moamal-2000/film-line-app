import { createContext, useContext, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import API from "./movies.json";

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
    <div className="App">
      <MoviesContext.Provider value={moviesContextValue}>
        <Header />
        <Main />
      </MoviesContext.Provider>
    </div>
  );
}

export default App;
