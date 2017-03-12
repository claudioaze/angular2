import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { HeroesService } from './../heroes.service';
import { Hero } from './../hero.model';

@Component({
  selector: 'heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent {

  @Input() heroes: Hero[];

  @Output() deleteHero = new EventEmitter();

  @Output() editHero = new EventEmitter();

  constructor(private heroesService: HeroesService) { }

  edit(hero:Hero) {
    this.editHero.emit(hero);
  }

  delete(id:number) {
    this.deleteHero.emit(id);
  }

}
