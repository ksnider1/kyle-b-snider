import { WeatherConditions } from "../models/weather-conditions";

export const MOCK_WEATHER_RESPONSE: WeatherConditions[] = [
    {
      WeatherText: 'Sunny',
      HasPrecipitation: false,
      PrecipitationType: null,
      Temperature: {
        Metric: {
          Value: 21.9,
          Unit: 'C'
        },
        Imperial: {
          Value: 71,
          Unit: 'F'
        }
      }
    }
  ];
