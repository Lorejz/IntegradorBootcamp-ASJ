import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaRubroComponent } from './alta-rubro.component';

describe('AltaRubroComponent', () => {
  let component: AltaRubroComponent;
  let fixture: ComponentFixture<AltaRubroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AltaRubroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AltaRubroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
