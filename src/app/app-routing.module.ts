import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarFormComponent } from './car-form/car-form.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'cars', component: CarFormComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
