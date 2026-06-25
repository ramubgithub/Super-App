const {
  getWeather,
} = require("../services/weather.service");

const fetchWeather = async (req, res) => {
  try {
    const city =
      req.query.city || "Hyderabad";

    const weather =
      await getWeather(city);

    res.status(200).json({
      success: true,
      data: weather,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  fetchWeather,
};