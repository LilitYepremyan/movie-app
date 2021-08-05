import { useEffect, useState } from 'react';
import Movie from './Movie/Movie';

const FEATURED_API =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=';
// const IMG_API = "https://image.tmdb.org/t/p/w1280"

// const API_URL =
//   'https://api.themoviedb.org/3/discover/movie?api_key=a9b4a343adf7d98ac7614d76c835e0ea&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${p}&with_watch_monetization_types=flatrate';

function Apps() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

    const getMovies = (API) => {
      fetch(FEATURED_API)
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.results);
        });
    
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      fetch(SEARCH_API + searchTerm)
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.results);
        });
      setSearchTerm('');
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <header>
        <form onSubmit={handleOnSubmit}>
          <input
            className="search"
            type="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </header>
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie, i) => <Movie key={i} data={movie} />)}
      </div>
    </>
  );
}

export default Apps;
