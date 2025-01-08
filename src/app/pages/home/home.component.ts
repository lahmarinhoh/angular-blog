import { Component } from '@angular/core';
import { CentralModule } from '../../components/module/central.module';

@Component({
  selector: 'app-home',
  imports: [CentralModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
