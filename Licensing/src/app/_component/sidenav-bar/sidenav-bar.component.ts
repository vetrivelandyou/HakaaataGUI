import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-bar',
  templateUrl: './sidenav-bar.component.html',
  styleUrls: ['./sidenav-bar.component.css']
})
export class SidenavBarComponent implements OnInit {
  public routes: any;
  constructor() { 
    this.routes = [
      ""
    ];
  }

  ngOnInit() {
  }

}
