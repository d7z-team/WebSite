import { Component, OnInit } from '@angular/core';
import {TitleService} from "../../services/title.service";
import {MenuService} from "../../services/menu.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public title: TitleService,public menu:MenuService) { }

  ngOnInit(): void {
  }

  onBack() {

  }

  toggleMenu() {
    this.menu.toggle()
  }
}
