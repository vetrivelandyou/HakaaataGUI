import { Routes, RouterModule } from '@angular/router';

export const appRoutes: Routes = [

    { path: 'dashboard', loadChildren:  './dashboard/dashboard.module#DashboardModule' },
    { path: 'product', loadChildren:  './products/products.module#ProductsModule'},
    { path: 'customers', loadChildren:  './customers/customers.module#CustomersModule' },
    { path: 'reports', loadChildren:  './reports/reports.module#ReportsModule'},
    { path: 'licenses', loadChildren:  './licenses/licenses.module#LicensesModule'},
    
    { path: '**', redirectTo: 'dashboard' }
];
