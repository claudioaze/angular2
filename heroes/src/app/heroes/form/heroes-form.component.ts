import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Hero } from './../hero.model';

@Component({
    selector: 'heroes-form',
    templateUrl: './heroes-form.component.html'
})
export class HeroesFormComponent implements OnInit, OnChanges {

    form: FormGroup;

    @Input() selectedHero: Hero;

    @Output() saveHero = new EventEmitter();

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.form = HeroesFormComponent.createForm(this.formBuilder);
    }

    ngOnChanges() {
        if(this.selectedHero) {
            this.form.patchValue({
                id: this.selectedHero.id,
                nome: this.selectedHero.nome,
                empresa: this.selectedHero.empresa,
                habilidades: this.selectedHero.habilidades
            });
        }
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