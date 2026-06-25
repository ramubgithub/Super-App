import {
  useEffect,
  useState,
} from "react";

import {
  getNews,
} from "../../api/newsApi";

import "./NewsWidget.css";

function NewsWidget() {
  const [
    articles,
    setArticles,
  ] = useState([]);

  const [
    current,
    setCurrent,
  ] = useState(0);

  const [
    loading,
    setLoading,
  ] = useState(true);

  useEffect(() => {
    const fetchNews =
      async () => {
        try {
          const res =
            await getNews();

          setArticles(
            res.data.data ||
              []
          );
        } catch (
          error
        ) {
          console.error(
            error
          );
        } finally {
          setLoading(
            false
          );
        }
      };

    fetchNews();
  }, []);

  useEffect(() => {
    if (
      !articles.length
    )
      return;

    const timer =
      setInterval(() => {
        setCurrent(
          (prev) =>
            (prev + 1) %
            articles.length
        );
      }, 3000);

    return () =>
      clearInterval(
        timer
      );
  }, [articles]);

  if (loading) {
    return (
      <div className="news-widget">
        Loading
        News...
      </div>
    );
  }

  if (
    !articles.length
  ) {
    return (
      <div className="news-widget">
        No News
        Available
      </div>
    );
  }

  const article =
    articles[current];

  return (
    <div className="news-widget">
      <img
        src={
          article?.urlToImage ||
          "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800"
        }
        alt={
          article?.title
        }
      />

      <div className="news-content">
        <h3>
          {
            article?.title
          }
        </h3>

        <p>
          {
            article?.description
          }
        </p>

        <a
          href={
            article?.url
          }
          target="_blank"
          rel="noreferrer"
        >
          Read More
        </a>
      </div>
    </div>
  );
}

export default NewsWidget;