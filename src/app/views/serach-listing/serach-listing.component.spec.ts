/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SerachListingComponent } from './serach-listing.component';

describe('SerachListingComponent', () => {
  let component: SerachListingComponent;
  let fixture: ComponentFixture<SerachListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerachListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerachListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
