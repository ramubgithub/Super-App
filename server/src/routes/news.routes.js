const express = require("express");

const router =
  express.Router();

const {
  fetchNews,
} = require(
  "../controllers/news.controller"
);

router.get(
  "/",
  fetchNews
);

module.exports =
  router;