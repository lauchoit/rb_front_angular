import { Routes, RouterModule } from '@angular/router';


// import { moduleOrComponent } from '';

import { PagesComponent } from './pages/pages.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { GraficasComponent } from './pages/graficas/graficas.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { UserComponent } from './pages/user/user.component';

import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: PagesComponent,
    children: [
        { path: 'dashboard', component: DashboardComponent },
        { path: 'progress', component: ProgressComponent },
        { path: 'graficas', component: GraficasComponent },
        { path: 'userregister', component: UserComponent },
    ] },
    { path: '**', component: NopagefoundComponent },

];

export const APP_ROUTE = RouterModule.forRoot( appRoutes, { useHash: true } );
