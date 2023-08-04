import React from "react";
import styles from "./Movie.module.scss";

const Movie = ({ movie }) => {
  return (
    <div className={styles.movie}>
      <div className={styles.img}>
        <img src={movie.Poster} alt="" />
      </div>

      <div className={styles.info}>
        <div className={styles.box}>
          <h4 className={styles.nameMovie}>{movie.Title}</h4>
          <span className={styles.releaseYear}>{movie.Year}</span>
        </div>

        <div>
          <span className={styles.resolution}>{movie.Reslution}</span>
          <div className={styles.timeAndRate}>
            <span className={styles.time}>
              <i className="fa-regular fa-clock"></i>
              {movie.Runtime}
            </span>
            <span className={styles.rate}>
              <i className="bi bi-star-fill"></i>
              {movie.imdbRating}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
