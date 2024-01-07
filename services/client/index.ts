import { TOpenWeatherData } from "@/types/open-weather";
import $http from "@/utils/request";

export const getCurrentWeather = async () => {
  const res = await $http.get<TOpenWeatherData>("/api/weather");
  return res.data;
};

export const getInitialData = async () => {
  const res = await $http.get<{ weather: TOpenWeatherData }>("/api/initial");
  return res.data;
};
