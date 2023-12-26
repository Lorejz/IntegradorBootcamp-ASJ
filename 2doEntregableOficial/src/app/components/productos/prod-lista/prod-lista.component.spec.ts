import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdListaComponent } from './prod-lista.component';

describe('ProdListaComponent', () => {
  let component: ProdListaComponent;
  let fixture: ComponentFixture<ProdListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProdListaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProdListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
