import { CommonModule, DatePipe } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { WeatherConditions } from '../../common/models/weather-conditions';
import { WeatherService } from '../../common/services/weather.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-my-profile',
  standalone: true,
  imports: [CommonModule, DatePipe, HttpClientModule, MatButtonModule],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.scss'
})
export class MyProfileComponent implements OnInit {
  @Output() displayFullWeatherEvent: EventEmitter<WeatherConditions> = new EventEmitter();

  constructor(private weatherService: WeatherService) {}

  greeting: string = '';
  currentDate: Date = new Date();
  displayFahrenheit: boolean = true;
  tempUnitButtonLabel: string = 'Celsius';
  weatherFetched: boolean = false;
  weatherConditions: WeatherConditions;
  isSunny: boolean;
  showHide: string = 'Show';

  ngOnInit(): void {
    this.greeting = this.setGreeting(this.currentDate.getHours());
  }

  setGreeting(hour: number): string {
    return hour >= 17 ? 'Good Evening' : hour >= 12 ? 'Good Afternoon' : 'Good Morning';
  }

  fetchCurrentConditions(): void {
    this.weatherService.getCurrentConditions().subscribe((conditions: WeatherConditions[]) => {
      this.weatherConditions = conditions[0];
      const weatherText: string = this.weatherConditions.WeatherText.toLowerCase(); 
      this.isSunny =  weatherText === 'sunny' || weatherText === 'mostly clear';
      this.weatherFetched = true;
    });
  }

  showHideFullWeather(): void {
    if(this.showHide === 'Show') {
      this.displayFullWeatherEvent.emit(this.weatherConditions);
      this.showHide = 'Hide';
    } else {
      this.displayFullWeatherEvent.emit(null);
      this.showHide = 'Show';
    }
  }

  toggleTempUnit(): void {
    this.displayFahrenheit = !this.displayFahrenheit;
    this.tempUnitButtonLabel = this.displayFahrenheit ? 'Celsius' : 'Fahrenheit';
  }
}
