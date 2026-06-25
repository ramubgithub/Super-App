import MovieCard from "./MovieCard";

import "./MovieGrid.css";

function MovieGrid({
  movies,
  onSelect,
}) {
  return (
    <div className="movie-grid">

      {movies.map(
        (movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            onSelect={
              onSelect
            }
          />
        )
      )}

    </div>
  );
}

export default MovieGrid;