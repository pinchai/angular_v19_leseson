import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ACADEMICComponent } from './academic.component';

describe('ACADEMICComponent', () => {
  let component: ACADEMICComponent;
  let fixture: ComponentFixture<ACADEMICComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ACADEMICComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ACADEMICComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
