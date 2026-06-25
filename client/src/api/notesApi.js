import api from "./axios";

export const getNotes =
  async () => {
    const response =
      await api.get("/notes");

    return response.data;
  };

export const createNote =
  async (content) => {
    const response =
      await api.post(
        "/notes",
        {
          content,
        }
      );

    return response.data;
  };