import { Component, OnInit } from '@angular/core';

import {  IHero, Ielement } from '../hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: IHero[] = [];
  elements : Ielement[] = [];
  url : string[] = [];
  constructor(
    private heroService: HeroService
  ){ 
    this.heroService.getElements().subscribe(elements =>this.elements = elements)
  }

  ngOnInit(): void {
    this.getHeroes();
   this.heroService.getHeroes().subscribe(heroes => {
      this.heroes = heroes;
      this.url = this.heroes.map(hero => this.getElementUrl(hero.elementId));
    });
  }
  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
  getElementUrl(elementId: number): string {
    const element = this.elements.find(el => el.id === elementId);
    return element ? element.url : '';
  }
  onRemove(id: any) {
    if (confirm("bạn có muốn xoá sản phẩm này không")) {
      this.heroService.deleteHero(id).subscribe(() => this.heroes = this.heroes.filter((item) => item.id != id))
      alert("Xóa sản phẩm thành công")
      window.location.reload()
    }
   
  }
}