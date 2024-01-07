export type TOpenWeatherData = {
  coord: TOpenWeatherCoord;
  weather: TOpenWeatherCondition[];
  base: string;
  main: TOpenWeatherMain;
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
  _cuz_last_sync: number;
};
export type TOpenWeatherCoord = {
  lon: number;
  lat: number;
};
export type TOpenWeatherCondition = {
  id: number;
  main: string;
  description: string;
  icon: string;
};
export type TOpenWeatherMain = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
};
