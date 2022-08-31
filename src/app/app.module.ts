import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputFieldComponent } from './components/general/input-field/input-field.component';
import { PokemonListComponent } from './components/general/pokemon-list/pokemon-list.component';
import { PokemonWrapperComponent } from './components/general/pokemon-wrapper/pokemon-wrapper.component';
import { PokemonImageComponent } from './components/general/pokemon-image/pokemon-image.component';
import { PokemonDetailsComponent } from './components/general/pokemon-details/pokemon-details.component';

import { HttpClientModule } from '@angular/common/http';

import { LandingPage } from './pages/landing/landing.page';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/general/header/header.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { TrainerPage } from './pages/trainer/trainer.page';


@NgModule({
  declarations: [
    AppComponent,
    InputFieldComponent,
    PokemonListComponent,
    PokemonWrapperComponent,
    PokemonImageComponent,
    PokemonDetailsComponent,
    LandingPage,
    HeaderComponent,
    TrainerPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
