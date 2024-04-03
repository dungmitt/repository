import { Component } from '@angular/core';
import { Icity } from '../../app/hero';
import { HeroService } from '../../app/services/hero.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrl: './city.component.css'
})
export class CityComponent {
  city : Icity[] = [];
  constructor(
    private cityService : HeroService
  ){

  }
  ngOnInit(): void {
    this.getCity();
  }
  getCity() :void{
    this.cityService.getCitys().subscribe(city => this.city = city)
  }
}
