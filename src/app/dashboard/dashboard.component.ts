import { Component, OnInit } from '@angular/core';
import { HeroService } from "../hero.service";
import { Hero } from "../hero";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();

  }
  
  getHeroes(): void {
    var a = Math.floor(Math.random() * 7) ;
    var b = a + 4;
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(a, b));
  }

  
}
