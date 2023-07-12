import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DetailPageComponent } from './detail-page/detail-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'detail/:id', component: DetailPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
