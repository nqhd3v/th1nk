import { getWeather } from "@/services/server/firebase/weather";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const weather = await getWeather();
    res.send({ weather });
  } catch (err: any) {
    console.error("Error", err.response ? err.response.data : err.message);
    res.status(500).json({ error: err.message });
  }
}
