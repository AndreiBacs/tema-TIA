import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice', description: 'text' },
      { id: 12, name: 'Narco', description: 'text' },
      { id: 13, name: 'Bombasto', description: 'text' },
      { id: 14, name: 'Celeritas', description: 'text' },
      { id: 15, name: 'Magneta', description: 'text' },
      { id: 16, name: 'RubberMan', description: 'text' },
      { id: 17, name: 'Dynama', description: 'text' },
      { id: 18, name: 'Dr IQ', description: 'text' },
      { id: 19, name: 'Magma', description: 'text' },
      { id: 20, name: 'Tornado', description: 'text' }
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