import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { PokemonListComponent } from './pokemon-list.component';
import { PokemonService } from 'src/app/pokemon.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { MatGridListModule } from '@angular/material/grid-list';

let pokemonResult ={
  results:[
    {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/1'
    }
  ]
}

fdescribe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;
  let mockPokemonService;

  beforeEach(async () => {
    mockPokemonService = jasmine.createSpyObj<PokemonService>([
      'getPokemonList'
    ])
    mockPokemonService.getPokemonList.and.callFake(()=>{
      return of(pokemonResult)
    })

    await TestBed.configureTestingModule({
      declarations: [ PokemonListComponent ],
      imports:[HttpClientTestingModule,MatGridListModule],
      providers:[
        {provider: PokemonService, useValue: mockPokemonService}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getPokemon with data',fakeAsync(()=>{
      component.getPokemonList()
      tick();
      fixture.detectChanges()

      console.log(fixture.debugElement)

      // expect(component.pokemonList).toBeTruthy()
      // expect(component.pokemonList.length).toBe(1)
    })) 
});
