import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheimeiPage } from './rechercheimei.page';

describe('RechercheimeiPage', () => {
  let component: RechercheimeiPage;
  let fixture: ComponentFixture<RechercheimeiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheimeiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheimeiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
