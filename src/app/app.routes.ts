import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { AboutUs } from './pages/about-us/about-us';
import { ContactUs } from './pages/contact-us/contact-us';
import { Services } from './pages/services/services';
import { Portfolio } from './pages/portfolio/portfolio';
import { PageNotFound } from './shared/page-not-found/page-not-found';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'home', component: Home },
    { path: 'about', component: AboutUs },
    { path: 'contact-us', component: ContactUs },
    { path: 'services', component: Services },
    { path: 'portfolio', component: Portfolio },
    { path: '**', component: PageNotFound },
];
