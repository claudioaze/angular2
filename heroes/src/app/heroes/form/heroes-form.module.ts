import { HeroesModule } from './../heroes.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroesFormComponent }  from './heroes-form.component';

@NgModule({
    declarations: [ HeroesFormComponent ],
    imports: [ CommonModule, HeroesModule ],
    exports: [ HeroesFormComponent ]
})
export class HeroesFormModule {}