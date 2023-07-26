import React from "react";
import Introduction from "./Introduction";
import styles from "./Main.module.scss";
import UpcomingMovies from "./UpcomingMovies";

const Main = () => {
  return (
    <main>
      <Introduction />
      <UpcomingMovies />
    </main>
  );
};

export default Main;
