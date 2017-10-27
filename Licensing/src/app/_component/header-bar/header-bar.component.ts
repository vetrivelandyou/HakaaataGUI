import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {
  public users;
  public user;

  constructor() {
    this.users = [
      { name: 'Vetrivel D', role: 'Admin', photo: "assets/images/profile-photo-0.jpg" },
      { name: 'Ahemd S', role: 'Sales', photo: "assets/images/profile-photo-1.jpg" }
    ];

    let user_key: any = localStorage.getItem('user');
    if(user_key == undefined) {
      user_key = 0;
    }
    this.user = this.users[user_key];
  }

  ngOnInit() {
  }

  changeUser(key) {
    this.user = this.users[key];
    localStorage.setItem('user', key);
  }

}
