import {Component, OnInit} from '@angular/core';
import {TitleService} from "../../services/title.service";
import {MenuService} from "../../services/menu.service";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showMenu: boolean = false;

  constructor(public title: TitleService, public menu: MenuService, public route: Router) {
  }

  ngOnInit(): void {
  }

  onBack() {

  }



  go(url: string) {
    this.route.navigate([url]).then()
    this.showMenu = false;
  }
}
