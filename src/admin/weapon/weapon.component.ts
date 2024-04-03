import { Component } from '@angular/core';
import { Iweapons } from '../../app/hero';
import { HeroService } from '../../app/services/hero.service';

@Component({
  selector: 'app-weapon',
  templateUrl: './weapon.component.html',
  styleUrl: './weapon.component.css'
})
export class WeaponComponent {
  weapon : Iweapons[] = [];
  constructor(
    private weaponService : HeroService
  ){

  }
  ngOnInit(): void {
    this.getWeapons();
  }
  getWeapons() :void{
    this.weaponService.getWeapons().subscribe(weapon => this.weapon = weapon)
  }
}
