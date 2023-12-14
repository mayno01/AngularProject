import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidetailsComponent } from './unidetails.component';

describe('UnidetailsComponent', () => {
  let component: UnidetailsComponent;
  let fixture: ComponentFixture<UnidetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnidetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnidetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
