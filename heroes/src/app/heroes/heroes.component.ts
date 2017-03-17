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

  fieldsToDisplay = [];

  constructor(private heroesService: HeroesService) {
      this.fieldsToDisplay.push(
          {header: 'Nome', field: 'nome'},
          {header: 'Empresa', field: 'empresa'},
          {header: 'Habilidades', field: 'habilidades'},
      );
  }

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
      
      let index: number = this.heroes.findIndex((h => h.id == hero.id));
      
      if(index >= 0) {
        this.heroes[index] = hero;
      } else {
        this.addHero(hero);
      }
    } else {
      this.addHero(hero);
    }

    this.selectedHero = new Hero();
  }

  private addHero(hero: Hero) {
    const latest = this.heroes.reduce((prev, current) => (prev.id > current.id) ? prev : current);
    hero.id = (latest.id + 1);
    this.heroes.push(hero);
  }

}
