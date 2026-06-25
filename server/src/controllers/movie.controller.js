const axios = require("axios");
const { getMovies } = require("../services/movie.service");

const fetchMovies = async (req, res) => {
  try {
    const search = req.query.search || "Marvel";

    const movies = await getMovies(search);

    res.status(200).json({
      success: true,
      data: movies,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const fetchMovieDetails = async (req, res) => {
  try {
    const response = await axios.get(
      "https://www.omdbapi.com/",
      {
        params: {
          i: req.params.id,
          apikey: process.env.OMDB_API_KEY,
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  fetchMovies,
  fetchMovieDetails,
};