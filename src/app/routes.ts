import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './table/table.component';
import {MainPageComponent} from './main-page/main-page.component';

export const appRoutes: Routes = [
    { path: '', component: MainPageComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'table', component: TableComponent },
];
