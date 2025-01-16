import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./page/home/home.component')
        .then(mod => mod.HomeComponent)
    }
];
