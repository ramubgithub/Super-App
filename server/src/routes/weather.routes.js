const express = require("express");

const router = express.Router();

const {
  fetchWeather,
} = require(
  "../controllers/weather.controller"
);

router.get(
  "/",
  fetchWeather
);

module.exports = router;