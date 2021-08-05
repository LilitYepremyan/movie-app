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
  return (
    <div className="movie">
      <img
        src={
          poster_path
            ? IMG_API + poster_path
            : 'https://www.google.com/search?q=%D0%B4%D1%83%D0%B1%D0%BB%D1%8C+%D1%80%D0%B8%D1%81%D1%83%D0%BD%D0%BE%D0%BA&tbm=isch&hl=ru&sa=X&ved=2ahUKEwjYtKj13ZryAhWKmKQKHTiaBeEQrNwCKAB6BQgBELgB&biw=1439&bih=688#imgrc=pmoppNQnkk_IpM&imgdii=UdBlOjrZoV2ubM'
        }
        width="300px"
        alt={title}
      ></img>
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
