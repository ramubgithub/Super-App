import api from "./axios";

export const getWeather = async (
  city = "Hyderabad"
) => {
  return await api.get(
    `/weather?city=${city}`
  );
};