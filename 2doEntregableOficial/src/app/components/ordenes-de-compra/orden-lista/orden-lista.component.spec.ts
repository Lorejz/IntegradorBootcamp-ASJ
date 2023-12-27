import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenListaComponent } from './orden-lista.component';

describe('OrdenListaComponent', () => {
  let component: OrdenListaComponent;
  let fixture: ComponentFixture<OrdenListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrdenListaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrdenListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
