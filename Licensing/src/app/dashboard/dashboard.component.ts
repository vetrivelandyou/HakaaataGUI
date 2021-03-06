import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { Dashboard, Badge } from '../_models/dashboards.models'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public dashboard = new Dashboard();
  public Type: string;
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      if (params.Type != undefined) {
        this.Type = params.Type;
        this.LoadBadges();
      }
    });
  }

  ngOnInit() {
  }

  LoadBadges() {
    this.dashboard.Badges = [];
    if (this.Type.toLowerCase() == "management") {

      this.dashboard.Badges.push({ Id: 1, Name: "Products", Icon: "fa fa-users fa-4x", Counts: 10, Link1: "/manage-product", Link2: "/", Link3: "/" });
      this.dashboard.Badges.push({ Id: 2, Name: "Customers", Icon: "fa fa-shopping-cart fa-4x", Counts: 200, Link1: "/", Link2: "/", Link3: "/" });
      this.dashboard.Badges.push({ Id: 3, Name: "Sales", Icon: "fa fa-usd fa-4x", Counts: 1895, Link1: "/", Link2: "/", Link3: "/" });
      this.dashboard.Badges.push({ Id: 3, Name: "Renewals", Icon: "fa fa-eye fa-4x", Counts: 256, Link1: "/", Link2: "/", Link3: "/" });
    } else if (this.Type.toLowerCase() == "salesteam") {
      this.dashboard.Badges.push({ Id: 1, Name: "Products", Icon: "fa fa-users fa-4x", Counts: 10, Link1: "/manage-product", Link2: "/", Link3: "/" });
      this.dashboard.Badges.push({ Id: 2, Name: "My Customers", Icon: "fa fa-shopping-cart fa-4x", Counts: 200, Link1: "/", Link2: "/", Link3: "/" });
      this.dashboard.Badges.push({ Id: 3, Name: "My Sales", Icon: "fa fa-usd fa-4x", Counts: 1895, Link1: "/", Link2: "/", Link3: "/" });
      this.dashboard.Badges.push({ Id: 3, Name: "Renewals", Icon: "fa fa-eye fa-4x", Counts: 256, Link1: "/", Link2: "/", Link3: "/" });
    } else {
      this.dashboard.Badges.push({ Id: 1, Name: "Products", Icon: "fa fa-users fa-4x", Counts: 0, Link1: "/manage-product", Link2: "/", Link3: "/" });
      this.dashboard.Badges.push({ Id: 2, Name: "Customers", Icon: "fa fa-shopping-cart fa-4x", Counts: 0, Link1: "/", Link2: "/", Link3: "/" });
      this.dashboard.Badges.push({ Id: 3, Name: "Sales", Icon: "fa fa-usd fa-4x", Counts: 0, Link1: "/", Link2: "/", Link3: "/" });
      this.dashboard.Badges.push({ Id: 3, Name: "Renewals", Icon: "fa fa-eye fa-4x", Counts: 0, Link1: "/", Link2: "/", Link3: "/" });
    }
  }

}
