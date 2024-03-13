import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyProfileComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'kyle-b-snider';
}
