import {Component, OnInit} from '@angular/core';
import {TitleService} from "../../services/title.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  constructor(private title: TitleService) {
  }

  ngOnInit(): void {
    this.title.setTitle("关于")
  }
}
