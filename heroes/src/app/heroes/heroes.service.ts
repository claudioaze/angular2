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
        habilidades: [ 
          { habilidade: "Super força"},
          { habilidade: "Imortalidade"}  
        ]
      },
      {
        id: 2,
        nome:"Homem de Ferro",
        empresa:"Marvel",
        habilidades: [ 
          { habilidade: "Bilionário"},
          { habilidade: "Inteligente"},
          { habilidade: "Filantrópico"}
        ]
      }
    ];
  }

}
