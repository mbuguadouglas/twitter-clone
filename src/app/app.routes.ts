import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { Error404Component } from './error-404/error-404.component';

export const routes: Routes = [
    {path: '', component:HomepageComponent},
    {path: '**', component:Error404Component}
];
