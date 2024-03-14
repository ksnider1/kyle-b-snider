import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { WeatherService } from './weather.service';
import { MOCK_WEATHER_RESPONSE } from '../constants/test-constants';

describe('WeatherService', () => {
  let service: WeatherService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(WeatherService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getCurrentConditions', () => {
    it('should fetch weather conditions', () => {
      const mockResponse: any = MOCK_WEATHER_RESPONSE;
      service.getCurrentConditions().subscribe((res) => {
        expect(res).toBe(mockResponse);
      });

      const req = httpMock.expectOne('http://dataservice.accuweather.com/currentconditions/v1/18474_PC?apikey=KEY');
      expect(req.request.method).toBe('GET');
      req.flush(mockResponse);
    });
  });
});
