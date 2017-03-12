import { ReactiveFormsModule } from '@angular/forms';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HeroesComponent } from './../heroes.component';
import { HeroesFormComponent } from './../form/heroes-form.component';
import { HeroesListComponent } from './../list/heroes-list.component';
import { HeroesService } from './../heroes.service';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        HeroesComponent,
        HeroesListComponent,
        HeroesFormComponent 
      ],
      providers: [
        HeroesService
      ], 
      imports: [
        ReactiveFormsModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
