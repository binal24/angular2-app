import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../views/login/login.component';
import { MasterComponent } from '../views/layout/master/master.component';
import { HomepageComponent } from '../views/homepage/homepage.component';
import { SignupComponent } from '../views/signup/signup.component';
import { AuthGuard } from '../common/auth.guard';
import { TracksComponent } from '../views/tracks/tracks.component';
import { SerachListingComponent } from '../views/serach-listing/serach-listing.component';

const appRoutes: Routes = [
    { path: '', component: HomepageComponent, pathMatch: 'full' },
    {
        path: '', component: MasterComponent, canActivate: [AuthGuard],
        children: [
            { path: 'tracks', component: TracksComponent },
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'search', component: SerachListingComponent },
    { path: 'signup', component: SignupComponent },

    //Default load homepage when session is not active
    { path: '**', redirectTo: '' }
];
export const routing = RouterModule.forRoot(appRoutes);

