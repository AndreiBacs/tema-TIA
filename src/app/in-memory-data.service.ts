import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Superman', description: 'text', img: '../../assets/superman.png' },
      { id: 2, name: 'Batman', description: 'text', img: '../../assets/batman.png' },
      { id: 3, name: 'Spiderman', description: 'text', img: '../../assets/spiderman.png' },
      { id: 4, name: 'Wolverine', description: 'text', img: '../../assets/wolverine.png' },
      { id: 5, name: 'Magneta', description: 'text', img: '' },
      { id: 6, name: 'RubberMan', description: 'text', img: '' },
      { id: 7, name: 'Dynama', description: 'text', img: '' },
      { id: 8, name: 'Dr IQ', description: 'text', img: '' },
      { id: 9, name: 'Magma', description: 'text', img: '' },
      { id: 10, name: 'Tornado', description: 'text', img: '' }
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