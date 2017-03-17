import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Hero } from './../hero.model';

@Component({
    selector: 'heroes-form',
    templateUrl: './heroes-form.component.html'
})
export class HeroesFormComponent implements OnInit {

    form: FormGroup;

    habilidades = [];

    fieldsToDisplay = [];

    @Input()
    set selectedHero(hero:Hero) {
        if(hero) {
            this.form.patchValue(hero);
        }
    }

    @Output() saveHero = new EventEmitter();

    constructor(private formBuilder: FormBuilder) { 
        this.fieldsToDisplay.push(
            {header: 'Habilidade', field: 'habilidade'}
        );
    }

    ngOnInit() {
        this.form = HeroesFormComponent.createForm(this.formBuilder);
    }

    public static createForm(formBuilder: FormBuilder): FormGroup {

        return formBuilder.group({
            id: [],
            nome: ['',  Validators.compose([Validators.required, Validators.maxLength(25)])],
            empresa: ['', Validators.required],
            habilidades: formBuilder.group({
                habilidade: []
            })
        });
    }

    save() {
        this.saveHero.emit(this.form.value);
    }

    addHabilidade() {
        if(this.form.get('habilidades').value.habilidade) {
            this.habilidades.push(this.form.get('habilidades').value);
        }
        this.form.get('habilidades').reset();
    }

    deleteHabilidade(habilidade) {
        let index: number = this.habilidades.findIndex(h => h === habilidade);
        this.habilidades.splice(index, 1);
    }

    editHabilidade(habilidade) {
        this.form.get('habilidades').setValue(habilidade);
        this.deleteHabilidade(habilidade);
    }
}