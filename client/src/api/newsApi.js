import api from "./axios";

export const getNews =
  async () => {
    const response =
      await api.get("/news");

    return response;
  };