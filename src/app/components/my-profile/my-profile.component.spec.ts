import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfileComponent } from './my-profile.component';
import { WeatherService } from '../../common/services/weather.service';
import { MOCK_WEATHER_RESPONSE } from '../../common/constants/test-constants';
import { of } from 'rxjs';

describe('MyProfileComponent', () => {
  let component: MyProfileComponent;
  let fixture: ComponentFixture<MyProfileComponent>;
  let weatherService: WeatherService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyProfileComponent);
    component = fixture.componentInstance;
    weatherService = TestBed.inject(WeatherService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('setGreeting', () => {
    it('should set greeting to "Good Morning" if hours is less than 12', () => {
      const hours: number = 10;
      const expected: string = 'Good Morning';
      const actual: string = component.setGreeting(hours);
      expect(actual).toEqual(expected);
    });

    it('should return "Good Afternoon" if hours is greater than 11 and less than 17', () => {
      const hours: number = 14;
      const expected: string = 'Good Afternoon';
      const actual: string = component.setGreeting(hours);
      expect(actual).toEqual(expected);
    });

    it('should return "Good Evening" if hours is greater than or equal to 17', () => {
      const hours: number = 17;
      const expected: string = 'Good Evening';
      const actual: string = component.setGreeting(hours);
      expect(actual).toEqual(expected);
    });
  });

  describe('fetchCurrentConditions', () => {
    it('should fetch and store current conditions', () => {
      spyOn(weatherService, 'getCurrentConditions').and.returnValue(of(MOCK_WEATHER_RESPONSE));
      component.fetchCurrentConditions();
      expect(component.weatherConditions).toEqual(MOCK_WEATHER_RESPONSE[0]);
      expect(component.isSunny).toBeTrue();
      expect(component.weatherFetched).toBeTrue();
    });
  });

  describe('showHideFullWeather', () => {
    let emitSpy: any;
    beforeEach(() => {
      component.weatherConditions = MOCK_WEATHER_RESPONSE[0];
      emitSpy = spyOn(component.displayFullWeatherEvent, 'emit');
    });

    it('should emit current conditions and update button text', () => { 
      component.showHide = 'Show';
      component.showHideFullWeather();
      expect(emitSpy).toHaveBeenCalledWith(MOCK_WEATHER_RESPONSE[0]);
      expect(component.showHide).toBe('Hide');
    });

    it('should emit null and update button text', () => { 
      component.showHide = 'Hide';
      component.showHideFullWeather();
      expect(emitSpy).toHaveBeenCalledWith(null);
      expect(component.showHide).toBe('Show');
    });
  });

  describe('toggleTempUnit', () => {
    it('should toggle from F to C', () => {
      component.displayFahrenheit = true;
      component.tempUnitButtonLabel = 'Celsius';
      component.toggleTempUnit();
      expect(component.displayFahrenheit).toBeFalse();
      expect(component.tempUnitButtonLabel).toBe('Fahrenheit');
    });

    it('should toggle from C to F', () => {
      component.displayFahrenheit = false;
      component.tempUnitButtonLabel = 'Fahrenheit';
      component.toggleTempUnit();
      expect(component.displayFahrenheit).toBeTrue();
      expect(component.tempUnitButtonLabel).toBe('Celsius');
    });
  });
});
