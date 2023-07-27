import { useState } from "react";
import API from "./API/movies.json";
import styles from "./App.module.scss";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Overlay from "./Components/Shared/Overlay";
import { MoviesContext } from "./Contexts/MoviesContext";
import { OverlayContext } from "./Contexts/OverlayContext";

function App() {
  const [isOverlayActive, setIsOverlayActive] = useState(false);
  const [movies] = useState(API);

  return (
    <div className={styles.App}>
      <MoviesContext.Provider value={movies}>
        <OverlayContext.Provider value={{isOverlayActive, setIsOverlayActive}}>
          <Overlay />
          <Header />
          <Main />
        </OverlayContext.Provider>
      </MoviesContext.Provider>
    </div>
  );
}

export default App;
