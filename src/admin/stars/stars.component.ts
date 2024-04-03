import { Component } from '@angular/core';
import { Istar } from '../../app/hero';
import { HeroService } from '../../app/services/hero.service';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrl: './stars.component.css'
})
export class StarsComponent {
  stars: Istar[] = [];

  constructor(private starService: HeroService) { }

  ngOnInit(): void {
    this.getStars();
  }

  getStars(): void {
    this.starService.getStars()
    .subscribe(stars => this.stars = stars);
  }
}
