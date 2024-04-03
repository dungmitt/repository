import { FormsModule } from '@angular/forms';
import {Component, Input} from '@angular/core';
import { Location, NgIf, UpperCasePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../services/hero.service';
import { IHero } from '../hero';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})

export class HeroDetailComponent {
  hero: IHero | undefined;
  constructor(
    private route : ActivatedRoute,
    private heroService : HeroService,
    private location : Location,
  ){}
  ngOnInit(): void {
    this.getHero();
  }
  
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    if(this.hero){
      this.heroService.updateHero(this.hero)
      .subscribe(()=> this.goBack());
    }
  }
}
