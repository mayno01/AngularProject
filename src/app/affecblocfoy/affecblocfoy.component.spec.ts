import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffecblocfoyComponent } from './affecblocfoy.component';

describe('AffecblocfoyComponent', () => {
  let component: AffecblocfoyComponent;
  let fixture: ComponentFixture<AffecblocfoyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffecblocfoyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffecblocfoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
