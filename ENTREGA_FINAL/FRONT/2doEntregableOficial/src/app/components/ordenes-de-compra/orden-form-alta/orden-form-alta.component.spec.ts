import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenFormAltaComponent } from './orden-form-alta.component';

describe('OrdenFormAltaComponent', () => {
  let component: OrdenFormAltaComponent;
  let fixture: ComponentFixture<OrdenFormAltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrdenFormAltaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrdenFormAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
