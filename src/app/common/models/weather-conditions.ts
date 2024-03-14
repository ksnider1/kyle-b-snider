export interface WeatherConditions {
    HasPrecipitation: boolean;
    PrecipitationType?: string;
    WeatherText: string;
    Temperature: Temperature;
}

interface Temperature {
    Imperial: TempMeasure;
    Metric: TempMeasure;
}

interface TempMeasure {
    Value: number;
    Unit: string;
}