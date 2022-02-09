import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  open: boolean = false;

  constructor() {
  }

  toggle() {
    this.open = !this.open;
  }
}
