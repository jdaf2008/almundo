import { Component } from '@angular/core';
import { PortalService } from './shared/services/portal.service';
import { Controller } from './shared/controller';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Controller, PortalService]
})
export class AppComponent {
  title = 'almundo-frontend';
}
