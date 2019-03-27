import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuietesvousPage } from './quietesvous.page';

describe('QuietesvousPage', () => {
  let component: QuietesvousPage;
  let fixture: ComponentFixture<QuietesvousPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuietesvousPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuietesvousPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
