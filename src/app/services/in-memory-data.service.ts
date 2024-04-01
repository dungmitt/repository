import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { price: 100,id: 12, name: 'sieu nhan sieu do', img: 'https://i.pinimg.com/474x/90/57/0a/90570addee2645866a597530721f37fd.jpg' },
      { price: 200,id: 13, name: 'sieu nhan hong',img:'https://i.pinimg.com/564x/f1/43/64/f1436415a2a208043bdef80c73d66b4a.jpg' },
      { price: 300,id: 14, name: 'sieu nhan vang',img:'https://i.pinimg.com/564x/bf/84/39/bf8439fe825fff289c6472d34b3b7f77.jpg' },
      { price: 400,id: 15, name: 'sieu nhan den',img:'https://i.pinimg.com/564x/6f/3b/8f/6f3b8f2937e5c326da3f327112cf819f.jpg' },
      { price: 500,id: 16, name: 'sieu nhan bac mau',img:'https://i.pinimg.com/474x/31/82/d5/3182d53b9a5b1932a3108de4338c951b.jpg' },
      { price: 600,id: 17, name: 'sieu nhan tim',img:'https://i.pinimg.com/564x/59/30/e7/5930e7a0a193cc6ec933303b93455445.jpg' },
      { price: 700,id: 18, name: 'sieu nhan xanh',img:'https://i.pinimg.com/564x/10/7f/fc/107ffcaa5a7bb4ab6b6f0693a8e5b7a0.jpg' },
      { price: 800,id: 19, name: 'sieu nhan do', img:'https://i.pinimg.com/736x/d9/b8/3a/d9b83aa1a08be3e46ebb47254db8cf75.jpg' },
      { price: 900,id: 20, name: 'sieu nham xam',img:'https://i.pinimg.com/564x/87/11/7e/87117e34960dd5b2c5e8587dc170b06e.jpg' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}