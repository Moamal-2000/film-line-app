import React from "react";
import "./Introduction.css";

const Introduction = () => {
  return (
    <section className="website-introduction">
      <div className="container">
        <h1 className="website-name">Filmlane</h1>
        <h2>
          Unlimited <span>Movie</span>, TVs Shows \& More.
        </h2>
        <div className="box">
          <span className="pg">PG 18</span>
          <span className="resolution">HD</span>
          <div className="content">
            <span className="type">Romance, Drama</span>
            <div>
              2022 <span>128min</span>
            </div>
          </div>
        </div>
        <button className="button-effect" type="button">Watch Now</button>
      </div>
    </section>
  );
};

export default Introduction;
