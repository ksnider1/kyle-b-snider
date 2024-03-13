import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfileComponent } from './my-profile.component';

describe('MyProfileComponent', () => {
  let component: MyProfileComponent;
  let fixture: ComponentFixture<MyProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyProfileComponent);
    component = fixture.componentInstance;
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
});
