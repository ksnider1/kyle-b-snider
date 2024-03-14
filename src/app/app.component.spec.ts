import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MOCK_WEATHER_RESPONSE } from './common/constants/test-constants';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  describe('displayFullWeather', () => {
    it('should store the weather conditions', () => {
      component.displayFullWeather(MOCK_WEATHER_RESPONSE[0]);
      expect(component.weatherConditions).toEqual(MOCK_WEATHER_RESPONSE[0])
    });
  });
});
