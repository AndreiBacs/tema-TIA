import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {
        id: 1, name: 'Superman',
        description: 'Superman is a fictional superhero, who first appeared in American comic books published by DC Comics.',
        img: '../../assets/superman_2.png'
      },
      {
        id: 2, name: 'Batman',
        description: 'Batman is a superhero who appears in American comic books published by DC Comics.',
        img: '../../assets/batman.png'
      },
      {
        id: 3, name: 'Spiderman',
        description: 'Spider-Man is a fictional superhero created by writer-editor Stan Lee and writer-artist Steve Ditko.',
        img: '../../assets/spiderman.png'
      },
      {
        id: 4, name: 'Wolverine',
        description: 'Wolverine (birth name: James Howlett; alias: Logan and Weapon X) is a fictional character appearing in American comic books published by Marvel Comics, mostly in association with the X-Men.',
        img: '../../assets/wolverine.png'
      },
      {
        id: 5, name: 'Deadpool',
        description: 'Deadpool is a fictional character appearing in American comic books published by Marvel Comics.',
        img: '../../assets/deadpoolio.png'
      },
      {
        id: 6, name: 'Green Lantern',
        description: 'Green Lantern is the name of several superheroes appearing in American comic books published by DC Comics.',
        img: '../../assets/lantern.png'
      },
      {
        id: 7, name: 'Flash',
        description: 'The Flash (or simply Flash) is the name of several superheroes appearing in American comic books published by DC Comics.',
        img: '../../assets/flash.png'
      },
      {
        id: 8, name: 'Jedi Order',
        description: 'The Jedi (/ˈdʒɛdaɪ/) are the main protagonists of many works of the Star Wars franchise, often working symbiotically alongside the Galactic Republic and the Rebel Alliance.',
        img: '../../assets/jedi.png'
      },
      {
        id: 9, name: 'Wonder Woman',
        description: 'Wonder Woman is a fictional character appearing in American comic books published by DC Comics.',
        img: '../../assets/ww2.png'
      },
      {
        id: 10, name: 'Minutemen',
        description: 'The Minutemen are a superhero group that came before the Crimebusters. The group was founded in 1939 during the Golden Age. The group later disbanded in 1949 following some public controversies. Moore loosely based the Minutemen off the Mighty Crusaders.',
        img: '../../assets/watch.png'
      }
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