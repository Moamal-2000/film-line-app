import React, { useEffect, useRef } from "react";
import { useMoviesContext } from "../../App";
import Movie from "./Movie";
import "./UpcomingMovies.css";

const UpcomingMovies = () => {
  const movies = useMoviesContext().movies;
  const filtersContainer = useRef();

  useEffect(() => {
    const filters = Array.from(filtersContainer.current.children);

    filters.forEach((button) => {
      button.addEventListener("click", () => {
        filters.forEach(button => button.classList.remove('active'))
        button.classList.add('active')
      });
    });
  }, []);

  return (
    <section className="upcoming-movies">
      <div className="movies-container">
        <h2>ONLINE STREAMING</h2>
        <div className="filters-container">
          <h3>Upcoming Movies</h3>
          <div className="filters" ref={filtersContainer}>
            <button className="active" type="button">Movies</button>
            <button type="button">TV Shows</button>
            <button type="button">Anime</button>
          </div>
        </div>

        <ul className="movies-list">
          {movies.map(
            (movie, i) => i < 4 && <Movie movie={movie} key={movie.imdbID} />
          )}
        </ul>
      </div>
    </section>
  );
};

export default UpcomingMovies;
