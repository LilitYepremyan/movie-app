import React from 'react';
import './Movie.css';

const IMG_API = 'https://www.themoviedb.org/t/p/w220_and_h330_face';

const setVoteClass = (vote) => {
  if (vote > 8) {
    return 'green';
  } else if (vote >= 6) {
    return 'orange';
  } else {
    return 'red';
  }
};



const Movie = ({ data }) => {
  const { title, poster_path, overview, vote_average } = data;
  const src = poster_path
    ? IMG_API + poster_path
    : "https://azbukadekor.ru/upload/iblock/d7f/d7f9ddfa2750b6fa4a35bbef509c32d4.jpg";
  return (
    <div className="movie">
      <img src={src} width="300px" alt={title}></img>
      <div className="movie-info">
        <h3>{title}</h3>
        <span className={`tag ${setVoteClass(vote_average)}`}>
          {vote_average}
        </span>
        {/* <p>{overview}</p> */}
      </div>
      <div className="movie-over">
        <h3>Overview:</h3>
        <p>{overview}</p>
      </div>
    </div>
  );
};
export default Movie;
