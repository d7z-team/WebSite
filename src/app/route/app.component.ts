import {Component} from '@angular/core';
import {MenuService} from "../services/menu.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-site';

  constructor(public menuService: MenuService) {
  }
}
