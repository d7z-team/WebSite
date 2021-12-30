import { Component, OnInit } from '@angular/core';
import {TitleService} from "../../services/title.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public title: TitleService) { }

  ngOnInit(): void {
  }

  onBack() {

  }
}
