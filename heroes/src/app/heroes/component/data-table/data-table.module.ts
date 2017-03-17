import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesModule } from './../../heroes.module';
import { HeroesFormComponent } from './../../form/heroes-form.component';
import { TableComponent }  from './data-table.component';

@NgModule({
    declarations: [ HeroesFormComponent ],
    imports: [ CommonModule, HeroesModule ],
    exports: [ HeroesFormComponent ]
})
export class TableModule {}
