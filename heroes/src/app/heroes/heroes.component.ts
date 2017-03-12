import { Component, OnInit } from '@angular/core';

import { Hero } from './hero.model';
import { HeroesService } from './heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  selectedHero: Hero;

  constructor(private heroesService: HeroesService) { }

  ngOnInit() {
    this.heroes = this.heroesService.getHeroesMock();
  }

  deleteHero(id:number) {
    let index: number = this.heroes.findIndex(hero => hero.id === id);
    this.heroes.splice(index, 1);
  }

  editHero(hero:Hero) {
    this.selectedHero = hero;
  }

  saveHero(hero) {
    
    if(hero.id) {
     
      let index: number = this.heroes.findIndex((hero => hero.id == hero.id));
     
      if(index >= 0) {
        this.heroes[index] = hero;
      } else {
        this.heroes.push(hero);
      }
    }
    this.selectedHero = new Hero();
  }

}
