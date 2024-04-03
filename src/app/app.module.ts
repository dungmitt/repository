import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { SignUpComponent } from './users/sign-up/sign-up.component';
import { SignInComponent } from './users/sign-in/sign-in.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NhamComponent } from './element/nham/nham.component';
import { ThaoComponent } from './element/thao/thao.component';
import { BangComponent } from './element/bang/bang.component';
import { HoaComponent } from './element/hoa/hoa.component';
import { ThuyComponent } from './element/thuy/thuy.component';
import { LoiComponent } from './element/loi/loi.component';
import { PhongComponent } from './element/phong/phong.component';
import { AddHeroComponent } from '../admin/add-hero/add-hero.component';
import { UpdateHeroComponent } from '../admin/update-hero/update-hero.component';
import { StarsComponent } from '../admin/stars/stars.component';
import { ElementComponent } from '../admin/element/element.component';
import { WeaponComponent } from '../admin/weapon/weapon.component';
import { CityComponent } from '../admin/city/city.component';
import { ActivatedRoute } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    SignUpComponent,
    SignInComponent,
    NhamComponent,
    ThaoComponent,
    BangComponent,
    HoaComponent,
    ThuyComponent,
    LoiComponent,
    PhongComponent,
    AddHeroComponent,
    UpdateHeroComponent,
    StarsComponent,
    ElementComponent,
    WeaponComponent,
    CityComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    // no need to place any providers due to the `providedIn` flag...
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {
  
 }