import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Superman', description: 'text', img: '../../assets/superman_2.png' },
      { id: 2, name: 'Batman', description: 'text', img: '../../assets/batman.png' },
      { id: 3, name: 'Spiderman', description: 'text', img: '../../assets/spiderman.png' },
      { id: 4, name: 'Wolverine', description: 'text', img: '../../assets/wolverine.png' },
      { id: 5, name: 'Deadpool', description: 'text', img: '../../assets/deadpoolio.png' },
      { id: 6, name: 'Green Lantern', description: 'text', img: '../../assets/lantern.png' },
      { id: 7, name: 'Flash', description: 'text', img: '../../assets/flash.png' },
      { id: 8, name: 'Jedi', description: 'text', img: '../../assets/jedi.png' },
      { id: 9, name: 'Wonder Woman', description: 'text', img: '../../assets/ww2.png' },
      { id: 10, name: 'Minutemen', description: 'text', img: '../../assets/watch.png' }
    ];
    return { heroes };
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