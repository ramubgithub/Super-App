const axios = require("axios");

const getMovies = async (search) => {
  const response = await axios.get(
    "https://www.omdbapi.com/",
    {
      params: {
        s: search,
        apikey: process.env.OMDB_API_KEY,
      },
    }
  );

  return response.data.Search || [];
};

module.exports = {
  getMovies,
};