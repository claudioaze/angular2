import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Hero } from './../hero.model';

@Component({
    selector: 'heroes-form',
    templateUrl: './heroes-form.component.html'
})
export class HeroesFormComponent implements OnInit {

    form: FormGroup;

    @Input()
    set selectedHero(hero:Hero) {
        if(hero) {
            this.form.patchValue(hero);
        }
    }

    @Output() saveHero = new EventEmitter();

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.form = HeroesFormComponent.createForm(this.formBuilder);
    }

    public static createForm(formBuilder: FormBuilder): FormGroup {
        return formBuilder.group({
            'id': [],
            'nome': [null,  Validators.compose([Validators.required, Validators.maxLength(25)])],
            'empresa': [null, Validators.required],
            'habilidades': [null, Validators.required]
        });
    }

    save() {
        this.saveHero.emit(this.form.value);
    }
}