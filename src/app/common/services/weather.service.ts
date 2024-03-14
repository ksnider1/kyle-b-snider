import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_KEY, BASE_URL, CBUS_KEY, CURRENT_CONDITIONS_ENDPOINT } from '../constants/weather-constants';
import { Observable } from 'rxjs';
import { WeatherConditions } from '../models/weather-conditions';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getCurrentConditions(): Observable<WeatherConditions[]> {
    return this.http.get<WeatherConditions[]>(BASE_URL + CURRENT_CONDITIONS_ENDPOINT + CBUS_KEY + `?apikey=${API_KEY}`);
  }
}
