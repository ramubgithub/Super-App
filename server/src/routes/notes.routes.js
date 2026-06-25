const express = require("express");

const router = express.Router();

const protect = require(
  "../middleware/auth.middleware"
);

const {
  getNote,
  saveNote,
} = require(
  "../controllers/notes.controller"
);

router.get("/", protect, getNote);

router.post("/", protect, saveNote);

module.exports = router;