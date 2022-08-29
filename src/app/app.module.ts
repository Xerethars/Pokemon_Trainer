import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputFieldComponent } from './components/general/input-field/input-field.component';
import { PokemonListComponent } from './components/general/pokemon-list/pokemon-list.component';
import { PokemonWrapperComponent } from './components/general/pokemon-wrapper/pokemon-wrapper.component';
import { PokemonImageComponent } from './components/general/pokemon-image/pokemon-image.component';
import { PokemonDetailsComponent } from './components/general/pokemon-details/pokemon-details.component';
import { TrainerPagePage } from './pages/trainer-page/trainer-page.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InputFieldComponent,
    PokemonListComponent,
    PokemonWrapperComponent,
    PokemonImageComponent,
    PokemonDetailsComponent,
    TrainerPagePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
