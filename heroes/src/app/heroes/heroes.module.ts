import { TableModule } from './component/data-table/data-table.module';
import { TableComponent } from './component/data-table/data-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesComponent } from './heroes.component';
import { HeroesListComponent } from './list/heroes-list.component';
import { HeroesFormComponent } from './form/heroes-form.component';
import { HeroesService } from './heroes.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    HeroesComponent,
    HeroesListComponent,
    HeroesFormComponent,
    TableComponent
  ],
  exports: [
    HeroesComponent,
    HeroesListComponent,
    HeroesFormComponent,
    TableComponent
  ], 
  providers: [
    HeroesService
  ]
})
export class HeroesModule { }
