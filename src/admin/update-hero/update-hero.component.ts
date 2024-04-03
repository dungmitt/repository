import { Component } from '@angular/core';
import { IHero, Icity, Ielement, Istar, Iweapons } from '../../app/hero';
import { HeroService } from '../../app/services/hero.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-hero',
  templateUrl: './update-hero.component.html',
  styleUrl: './update-hero.component.css'
})
export class UpdateHeroComponent {
  hero: IHero = {
    name: "",
    img: "",
    starId:0,
    weaponId: 0,
    elementId: 0,
    cityId: 0,
  }
  stars : Istar[] = [];
  elements : Ielement[] = [];
  weapons : Iweapons[] = [];
  citys : Icity[] = [];
  showSuccessAlert = false;
  constructor(
    private heroService: HeroService, 
    private route: ActivatedRoute,
    private router : Router
    ){
    this.heroService.getStars().subscribe((stars)=> this.stars = stars),
    this.heroService.getElements().subscribe((elements)=> this.elements = elements),
    this.heroService.getWeapons().subscribe((weapons)=> this.weapons = weapons),
    this.heroService.getCitys().subscribe((citys)=> this.citys = citys)

    this.route.paramMap.subscribe((params) => {
      const idString = params.get('id');
      const id = params.get('id');
        if(id !== null){
          this.heroService.getHero(id).subscribe((hero: IHero) => this.hero = hero)
        console.log(this.hero);
        }
    })
  }
  onStarChange(event: any) {
    console.log(event.target.value);
    this.hero.starId = event.target.value;  
  }
  onElementChange(event: any) {
    console.log(event.target.value);
    this.hero.elementId = event.target.value;  
  }
  onWeaponChange(event: any) {
    console.log(event.target.value);
    this.hero.weaponId = event.target.value;  
  }
  onCityChange(event: any) {
    console.log(event.target.value);
    this.hero.cityId = event.target.value;  
  }
  onHandelSubmit() {
    this.heroService.updateHero(this.hero).subscribe((hero) => {
      console.log(hero);
      this.showSuccessAlert = true;
      alert("Thêm nhân vật thành công")
      this.router.navigate(["heroes"])
    });
  }

}
