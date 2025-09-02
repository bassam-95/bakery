import { LocationComponent } from './location/location.component';
import { InfoComponent } from './info/info.component';
import { BakingComponent } from './baking/baking.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"baking",component:BakingComponent},
  {path:"info",component:InfoComponent},
  {path:"location",component:LocationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
