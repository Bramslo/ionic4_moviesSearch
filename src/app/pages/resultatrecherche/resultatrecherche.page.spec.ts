import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatrecherchePage } from './resultatrecherche.page';

describe('ResultatrecherchePage', () => {
  let component: ResultatrecherchePage;
  let fixture: ComponentFixture<ResultatrecherchePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultatrecherchePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultatrecherchePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
