import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocModuleComponent } from './bloc-module.component';

describe('BlocModuleComponent', () => {
  let component: BlocModuleComponent;
  let fixture: ComponentFixture<BlocModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlocModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlocModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
