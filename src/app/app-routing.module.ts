import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes/heroes.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { SignUpComponent } from './users/sign-up/sign-up.component';
import { SignInComponent } from './users/sign-in/sign-in.component';
import { AddHeroComponent } from '../admin/add-hero/add-hero.component';
import { UpdateHeroComponent } from '../admin/update-hero/update-hero.component';
import { StarsComponent } from '../admin/stars/stars.component';
import { ElementComponent } from '../admin/element/element.component';
// import { Routes } from '@angular/router';

const rotes : Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-in', component: SignInComponent },
  {path : 'admin/add', component: AddHeroComponent},
  {path : 'admin/:id/update', component: UpdateHeroComponent},
  { path: 'star', component: StarsComponent },
  { path: 'element', component: ElementComponent },
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(rotes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
