import {
  useEffect,
  useState,
} from "react";

import {
  getMovies,
} from "../api/movieApi";

import MovieCard from "../components/movies/MovieCard";
import MovieModal from "../components/movies/MovieModal";

import "./Movies.css";

function Movies() {
  const [
    movies,
    setMovies,
  ] = useState([]);

  const [
    selectedMovie,
    setSelectedMovie,
  ] = useState(null);

  useEffect(() => {
    const fetchMovies =
      async () => {
        try {
          const res =
            await getMovies(
              "Marvel"
            );

          setMovies(
            res.data.data || []
          );
        } catch (error) {
          console.error(
            "Movie Error:",
            error
          );
        }
      };

    fetchMovies();
  }, []);

  return (
    <div className="movies-page">
      <h1>
        Entertainment
      </h1>

      <div className="movies-grid">
        {movies.map(
          (movie) => (
            <MovieCard
              key={
                movie.imdbID
              }
              movie={movie}
              onClick={() =>
                setSelectedMovie(
                  movie
                )
              }
            />
          )
        )}
      </div>

      {selectedMovie && (
        <MovieModal
          movie={
            selectedMovie
          }
          onClose={() =>
            setSelectedMovie(
              null
            )
          }
        />
      )}
    </div>
  );
}

export default Movies;