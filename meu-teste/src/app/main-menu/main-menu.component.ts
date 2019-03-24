import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  showItem = true;



  contentItem: string = "Casas";

  changeItem() {
    if(this.showItem == true) {
      this.showItem = false;
    } else {
      this.showItem = true;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
