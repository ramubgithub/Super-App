const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const connectDB = require("./config/db");

const authRoutes = require("./routes/auth.routes");
const notesRoutes = require("./routes/notes.routes");
const weatherRoutes = require("./routes/weather.routes");
const newsRoutes = require("./routes/news.routes");
const movieRoutes = require("./routes/movie.routes");

const {
  notFound,
  errorHandler,
} = require("./middleware/error.middleware");

connectDB();

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/auth", authRoutes);
app.use("/api/notes", notesRoutes);
app.use("/api/weather", weatherRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/movies", movieRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Super App API Running",
  });
});

app.use(notFound);
app.use(errorHandler);

module.exports = app;