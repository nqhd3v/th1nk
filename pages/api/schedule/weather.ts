import { isValidated } from "@/helper/validate";
import { setWeather } from "@/services/server/firebase/weather";
import {
  $weather,
  OPEN_WEATHER_API,
} from "@/services/server/third-party/open-weather";
import { TOpenWeatherData } from "@/types/open-weather";
import Joi from "joi";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const lat = req.query.lat as string;
  const long = req.query.long as string;

  try {
    console.info("-- Received a request to sync weather status!");
    isValidated({
      lat: Joi.number().required(),
      long: Joi.number().required(),
    })({ lat, long });
    console.info("--", { lat, long });

    const weather = await $weather<TOpenWeatherData>(
      OPEN_WEATHER_API.CURRENT_WEATHER(lat, long),
      { units: "metric" }
    );

    await setWeather({ ...weather.data, _cuz_last_sync: Date.now() });
    console.info("-- Sync finished!");

    res.send(weather.data);
  } catch (err: any) {
    console.error("Error", err.response ? err.response.data : err.message);
    res.status(500).json({ error: err.message });
  }
}
