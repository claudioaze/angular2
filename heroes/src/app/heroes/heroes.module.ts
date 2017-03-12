import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesComponent } from './heroes.component';
import { HeroesListComponent } from './list/heroes-list.component';
import { HeroesFormComponent } from './form/heroes-form.component';
import { HeroesService } from './heroes.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    HeroesComponent,
    HeroesListComponent,
    HeroesFormComponent
  ],
  exports: [
    HeroesComponent,
    HeroesListComponent,
    HeroesFormComponent
  ], 
  providers: [
    HeroesService
  ]
})
export class HeroesModule { }
