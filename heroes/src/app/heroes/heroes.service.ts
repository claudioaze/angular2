import { Injectable } from '@angular/core';

import { Hero } from './hero.model';

@Injectable()
export class HeroesService {

  constructor() { }

  getHeroesMock(): Hero[] {
    return [
      {
        id: 1,
        nome:"Hulk",
        empresa:"Marvel",
        habilidades: "Super força, imortalidade"
      },
      {
        id: 2,
        nome:"Homem de Ferro",
        empresa:"Marvel",
        habilidades: "Milionário, inteligente, filantropico"
      }
    ];
  }

}
