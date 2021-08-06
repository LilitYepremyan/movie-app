import React from 'react';
import './Movie.css';

const IMG_API = 'https://www.themoviedb.org/t/p/w220_and_h330_face';

const Movie = ({ data }) => {
  const { title, poster_path, overview } = data;
  const src = poster_path
    ? IMG_API + poster_path
    : 'https://azbukadekor.ru/upload/iblock/d7f/d7f9ddfa2750b6fa4a35bbef509c32d4.jpg';
  return (
    <div className="movie">
      <img src={src} width="300px" alt={title}></img>
      <div className="movie-info">
        <h3>{title}</h3>
      </div>
      <div className="movie-over">
        <h3>Overview:</h3>
        <p>{overview}</p>
        <span class="fa fa-star checked fa-2x"></span>
      </div>
    </div>
  );
};
export default Movie;
