import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CentralModule } from './components/module/central.module';
import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CentralModule, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-blog';
}
