import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Menu } from './pages/menu/menu';
import { Contact } from './pages/contact/contact';
import { Rating } from './pages/rating/rating';
import { Productdetails } from './pages/productdetails/productdetails';

export const routes: Routes = [
    {
        path: "",
        component: Home
    },
    {
        path: "home",
        component: Home
    },
    {
        path: "about",
        component: About
    },
    {
        path: "menu",
        component: Menu
    },
    {
        path:"contact",
        component:Contact
    },
    {
        path:"rating",
        component:Rating
    },
    {
        path:'product/:id',
        component:Productdetails
    },
    {
        path:"rating",
        component:Rating
    },
];
