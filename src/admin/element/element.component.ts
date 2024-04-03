import { Component } from '@angular/core';
import { Ielement } from '../../app/hero';
import { HeroService } from '../../app/services/hero.service';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrl: './element.component.css'
})
export class ElementComponent {
  element : Ielement[] = [];
  constructor(
    private elementService : HeroService
  ){

  }
  ngOnInit(): void {
    this.getElement();
  }
  getElement() :void{
    this.elementService.getElements().subscribe(element => this.element = element)
  }
}
