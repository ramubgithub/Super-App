const {
  getNews,
} = require("../services/news.service");

const fetchNews = async (
  req,
  res
) => {
  try {
    const articles =
      await getNews();

    res.status(200).json({
      success: true,
      data: articles,
    });
  } catch (error) {
    console.error(
      "NEWS ERROR:",
      error.response?.data ||
        error.message
    );

    res.status(500).json({
      success: false,
      message:
        "Failed to fetch news",
    });
  }
};

module.exports = {
  fetchNews,
};