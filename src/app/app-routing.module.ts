import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RutinangularHomeComponent } from './rutinangular-home/rutinangular-home.component';
import { RutinangularAboutComponent } from './rutinangular-about/rutinangular-about.component';

const routes: Routes = [
  {
    path:"",
    component: RutinangularHomeComponent
  },
  {
    path:"home",
    component: RutinangularHomeComponent
  },
  {
    path:"about",
    component: RutinangularAboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
