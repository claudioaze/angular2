import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

import { Hero } from './../hero.model';

@Component({
    selector: 'heroes-form',
    templateUrl: './heroes-form.component.html'
})
export class HeroesFormComponent implements OnInit {

    form: FormGroup;

    fieldsToDisplay = [];

    @Input()
    set selectedHero(hero:Hero) {
        if(hero) {
            
            this.form.patchValue(hero);
            
            //deletar todas as habilidades (form control) do form
            this.form.get('habilidades').value.forEach(element => {
               this.deleteHabilidade(element); 
            });

            //adicionar/criar novo form control para cada habilidade e add no form
            if(hero.habilidades) {
                hero.habilidades.forEach(obj => {
                    let formGroupHabilidades: FormGroup = this.initHabilidade();
                    formGroupHabilidades.patchValue(obj);

                    let formArray = <FormArray> this.form.get('habilidades');
                    formArray.push(formGroupHabilidades);
                });
            }
        }
    }

    @Output() saveHero = new EventEmitter();

    constructor(private formBuilder: FormBuilder) { 
        this.fieldsToDisplay.push(
            {header: 'Habilidade', field: 'habilidade'}
        );
    }

    ngOnInit() {
        this.form = this.createForm();
    }

    public createForm(): FormGroup {
        return this.formBuilder.group({
            id: [],
            nome: ['',  Validators.compose([Validators.required, Validators.maxLength(25)])],
            empresa: ['', Validators.required],
            habilidades: this.formBuilder.array([
                this.initHabilidade()
            ])
        });
    }

    initHabilidade() {
        return this.formBuilder.group({
            habilidade: ['', Validators.required]
        });
    }

    save() {
        this.saveHero.emit(this.form.value);
    }

    addHabilidade() {
        const control = <FormArray>this.form.controls['habilidades'];
        control.push(this.initHabilidade());
    }

    deleteHabilidade(position: number) {
        const control = <FormArray>this.form.controls['habilidades'];
        control.removeAt(position);
    }

}