import $http from "@/utils/request";

export const OPEN_WEATHER_API_URL = "https://api.openweathermap.org";
export const OPEN_WEATHER_API = {
  CURRENT_WEATHER: (lat?: string | number, long?: string | number) =>
    `/data/2.5/weather?lat=${lat}&lon=${long}`,
};
export const $weather = <T = any>(
  APIPath: string,
  queryParams?: Record<string, string | number | boolean>
) =>
  $http.get<T>(APIPath, {
    baseURL: OPEN_WEATHER_API_URL,
    params: {
      appid: process.env.OPEN_WEATHER_API_KEY,
      ...(queryParams || {}),
    },
  });
