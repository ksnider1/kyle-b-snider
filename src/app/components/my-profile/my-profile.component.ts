import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.scss'
})
export class MyProfileComponent implements OnInit {
  greeting: string = '';
  currentDate: Date = new Date();

  ngOnInit(): void {
    this.greeting = this.setGreeting(17);
  }

  setGreeting(hour: number): string {
    return hour >= 17 ? 'Good Evening' : hour >= 12 ? 'Good Afternoon' : 'Good Morning';
  }
}
