import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdFormAltaComponent } from './prod-form-alta.component';

describe('ProdFormAltaComponent', () => {
  let component: ProdFormAltaComponent;
  let fixture: ComponentFixture<ProdFormAltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProdFormAltaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProdFormAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
