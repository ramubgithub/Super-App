import { useEffect, useState } from "react";

import { getMovies } from "../../api/movieApi";

import "./MovieWidget.css";

function MovieWidget() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchMovies =
      async () => {
        try {
          const res =
            await getMovies(
              "Marvel"
            );

          setMovies(
            res?.data?.data ||
              []
          );
        } catch (error) {
          console.error(
            "Movie Error:",
            error
          );
        } finally {
          setLoading(
            false
          );
        }
      };

    fetchMovies();
  }, []);

  if (loading) {
    return (
      <div className="movie-widget">
        <h3>
          Movies
        </h3>

        <p>
          Loading
          Movies...
        </p>
      </div>
    );
  }

  if (
    !movies ||
    movies.length === 0
  ) {
    return (
      <div className="movie-widget">
        <h3>
          Movies
        </h3>

        <p>
          No Movies
          Found
        </p>
      </div>
    );
  }

  return (
    <div className="movie-widget">
      <h3>
        Trending
        Movies
      </h3>

      <div className="movie-grid">
        {movies
          .slice(0, 6)
          .map(
            (
              movie
            ) => (
              <div
                key={
                  movie.imdbID
                }
                className="movie-card"
              >
                {movie.Poster &&
                movie.Poster !==
                  "N/A" ? (
                  <img
                    src={
                      movie.Poster
                    }
                    alt={
                      movie.Title
                    }
                    onError={(
                      e
                    ) => {
                      e.target.src =
                        "/movie-placeholder.png";
                    }}
                  />
                ) : (
                  <div className="movie-no-image">
                    No
                    Poster
                  </div>
                )}

                <h4>
                  {
                    movie.Title
                  }
                </h4>

                <p>
                  {
                    movie.Year
                  }
                </p>
              </div>
            )
          )}
      </div>
    </div>
  );
}

export default MovieWidget;