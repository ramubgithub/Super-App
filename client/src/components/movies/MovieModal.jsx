import {
  useEffect,
  useState,
} from "react";

import {
  getMovieDetails,
} from "../../api/movieApi";

import "./MovieModal.css";

function MovieModal({
  movie,
  onClose,
}) {
  const [
    details,
    setDetails,
  ] = useState(null);

  useEffect(() => {
    if (!movie)
      return;

    const loadMovie =
      async () => {
        try {
          const res =
            await getMovieDetails(
              movie.imdbID
            );

          setDetails(
            res.data
          );
        } catch (
          error
        ) {
          console.error(
            error
          );
        }
      };

    loadMovie();
  }, [movie]);

  if (!details) {
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          Loading Movie
          Details...
        </div>
      </div>
    );
  }

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
    >
      <div
        className="modal-content"
        onClick={(e) =>
          e.stopPropagation()
        }
      >
        <button
          className="close-btn"
          onClick={onClose}
        >
          ×
        </button>

        <img
          src={
            details.Poster
          }
          alt={
            details.Title
          }
        />

        <h2>
          {
            details.Title
          }
        </h2>

        <p>
          {
            details.Plot
          }
        </p>

        <p>
          Genre:
          {" "}
          {
            details.Genre
          }
        </p>

        <p>
          IMDb Rating:
          {" "}
          {
            details.imdbRating
          }
        </p>
      </div>
    </div>
  );
}

export default MovieModal;