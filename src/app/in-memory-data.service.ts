import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Dr Nice', description: 'text' },
      { id: 2, name: 'Narco', description: 'text' },
      { id: 3, name: 'Bombasto', description: 'text' },
      { id: 4, name: 'Celeritas', description: 'text' },
      { id: 5, name: 'Magneta', description: 'text' },
      { id: 6, name: 'RubberMan', description: 'text' },
      { id: 7, name: 'Dynama', description: 'text' },
      { id: 8, name: 'Dr IQ', description: 'text' },
      { id: 9, name: 'Magma', description: 'text' },
      { id: 10, name: 'Tornado', description: 'text' }
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