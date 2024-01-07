import dayjs from "dayjs";
import firebase from ".";
import { TOpenWeatherData } from "@/types/open-weather";

export const getWeather = async (date?: string): Promise<TOpenWeatherData> => {
  const collection = firebase.firestore().collection("weather");
  const today = (date ? dayjs(date, "DD/MM/YYYY") : dayjs()).format(
    "DD_MM_YYYY"
  );

  const weather = await collection.doc(today).get();
  if (!weather.exists) {
    throw new Error("No weather status for today!");
  }
  return weather.data() as TOpenWeatherData;
};

export const setWeather = async (
  data: TOpenWeatherData,
  date?: string
): Promise<TOpenWeatherData> => {
  const collection = firebase.firestore().collection("weather");
  const today = (date ? dayjs(date, "DD/MM/YYYY") : dayjs()).format(
    "DD_MM_YYYY"
  );

  await collection.doc(today).set(data);
  return getWeather(date);
};
