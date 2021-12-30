import { Injectable } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  title = '';
  constructor(private _title:Title) {

  }
  setTitle(data:string){
    this.title = data;
    this._title.setTitle(data + " - d7z.net")
  }
}
