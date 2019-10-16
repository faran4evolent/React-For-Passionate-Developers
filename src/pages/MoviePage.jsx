import React from "react";
import Card from "../components/Card";
import { getMovies } from "../data/movies";

const MoviePage = () => {
  const moviesData = getMovies();
  return (
      <div className="row justify-content-center">
        {moviesData.map(movie => {
          return (
            <div key={movie.id} className="col-md-4 align-self-center">
              <Card data={movie} />
            </div>
          );
        })}
      </div>
  );
};

export default MoviePage;
