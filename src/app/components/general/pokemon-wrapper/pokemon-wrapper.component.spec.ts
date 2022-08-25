import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonWrapperComponent } from './pokemon-wrapper.component';

describe('PokemonWrapperComponent', () => {
  let component: PokemonWrapperComponent;
  let fixture: ComponentFixture<PokemonWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
