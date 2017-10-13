import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
export const appRoutes: Routes = [

    { path: 'dashboard', component: DashboardComponent },
    { path: '', component: DashboardComponent }
];
