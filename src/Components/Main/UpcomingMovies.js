import React, { useEffect, useRef } from "react";
import { useMoviesContext } from "../../Contexts/MoviesContext";
import Movie from "./Movie";
import styles from "./UpcomingMovies.module.scss";

const UpcomingMovies = () => {
  const movies = useMoviesContext();
  const filtersContainer = useRef();

  useEffect(() => {
    const filters = Array.from(filtersContainer.current.children);

    filters.forEach((button) => {
      button.addEventListener("click", () => {
        filters.forEach((button) => button.classList.remove("active"));
        button.classList.add("active");
      });
    });
  }, []);

  return (
    <section className={styles.upcomingMovies}>
      <div className={styles.moviesContainer}>
        <h2>ONLINE STREAMING</h2>
        <div className={styles.filtersContainer}>
          <h3>Upcoming Movies</h3>
          <div className={styles.filters} ref={filtersContainer}>
            <button className={styles.active} type="button">
              Movies
            </button>
            <button type="button">TV Shows</button>
            <button type="button">Anime</button>
          </div>
        </div>

        <div className={styles.moviesList}>
          {movies.map(
            (movie, i) => i < 4 && <Movie movie={movie} key={movie.imdbID} />
          )}
        </div>
      </div>
    </section>
  );
};

export default UpcomingMovies;
