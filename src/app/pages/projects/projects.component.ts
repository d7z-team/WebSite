import { Component, OnInit } from '@angular/core';
import {TitleService} from "../../services/title.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(private  title:TitleService) { }

  ngOnInit(): void {
    this.title.setTitle("项目概览")
  }
}
