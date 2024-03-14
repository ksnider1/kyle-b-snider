import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { HeaderComponent } from './components/header/header.component';
import { WeatherService } from './common/services/weather.service';
import { WeatherConditions } from './common/models/weather-conditions';
import { CommonModule } from '@angular/common';
import { WeatherDetailsCardComponent } from './components/weather-details-card/weather-details-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, HeaderComponent, MyProfileComponent, WeatherDetailsCardComponent, RouterOutlet],
  providers: [WeatherService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'kyle-b-snider';
  weatherConditions: WeatherConditions;

  displayFullWeather($event: WeatherConditions): void {
    this.weatherConditions = $event;
  }
}
