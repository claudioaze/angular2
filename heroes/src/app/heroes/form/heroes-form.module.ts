import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroesFormComponent }  from './heroes-form.component';

@NgModule({
    declarations: [ HeroesFormComponent ],
    imports: [ CommonModule ],
    exports: [ HeroesFormComponent ]
})
export class HeroesFormModule {}