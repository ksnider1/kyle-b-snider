import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDetailsCardComponent } from './weather-details-card.component';
import { MOCK_WEATHER_RESPONSE } from '../../common/constants/test-constants';

describe('WeatherDetailsCardComponent', () => {
  let component: WeatherDetailsCardComponent;
  let fixture: ComponentFixture<WeatherDetailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherDetailsCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeatherDetailsCardComponent);
    component = fixture.componentInstance;
    component.weatherDetails = MOCK_WEATHER_RESPONSE[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
