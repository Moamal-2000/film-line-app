import React from "react";
import "./Movie.css";

const Movie = ({movie}) => {
  return (
    <li className="movie">
      <div className="img">
        <img src={movie.Poster} alt="" />
      </div>

      <div className="info">
        <div>
          <h4 className="name-movie">{movie.Title}</h4>
          <span className="release-year">{movie.Year}</span>
        </div>

        <div>
          <span className="resolution">{movie.Reslution}</span>
          <div className="time-and-rate">
            <span className="time">
              <i className="fa-regular fa-clock"></i>
              {movie.Runtime}
            </span>
            <span className="rate">
              <i className="bi bi-star-fill"></i>
              {movie.imdbRating}
            </span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Movie;
