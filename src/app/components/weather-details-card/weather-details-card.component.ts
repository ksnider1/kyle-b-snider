import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { WeatherConditions } from '../../common/models/weather-conditions';

@Component({
  selector: 'app-weather-details-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDividerModule, MatListModule],
  templateUrl: './weather-details-card.component.html',
  styleUrl: './weather-details-card.component.scss'
})
export class WeatherDetailsCardComponent {
  @Input() weatherDetails: WeatherConditions;

}
