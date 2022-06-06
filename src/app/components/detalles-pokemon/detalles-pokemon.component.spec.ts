import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesPokemonComponent } from './detalles-pokemon.component';

describe('DetallesPokemonComponent', () => {
  let component: DetallesPokemonComponent;
  let fixture: ComponentFixture<DetallesPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesPokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
