const express = require("express");

const router = express.Router();

const {
  fetchMovies,
  fetchMovieDetails,
} = require("../controllers/movie.controller");

router.get("/", fetchMovies);

router.get("/:id", fetchMovieDetails);

module.exports = router;