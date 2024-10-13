import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MensClothingComponent } from './mens-clothing/mens-clothing.component';
import { WomensClothingComponent } from './womens-clothing/womens-clothing.component';

export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'mens-clothing',component: MensClothingComponent},
    {path: 'womens-clothing',component: WomensClothingComponent},
    {path: '**',component: LandingPageComponent}
];
