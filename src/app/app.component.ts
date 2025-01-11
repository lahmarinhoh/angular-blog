import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CentralModule } from './components/module/central.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CentralModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-blog';
}
