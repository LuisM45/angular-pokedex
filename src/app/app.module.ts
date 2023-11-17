import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ObservablecComponent } from './observablec/observablec.component';
import { MaterialsModule } from './materials/materials.module';
import { CategoriesModule } from './categories/categories.module';
import { ObservableComponent } from './observable/observable.component';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon'
import { CategoriesListComponent } from './categories/categories-list/categories-list.component';
import { PageNotFoundComponentComponent as PageNotFoundComponent } from './page-not-found-component/page-not-found-component.component';
import { PokemonsModule } from './pokemons/pokemons.module';
import { PokemonListByTypeComponent } from './pokemons/pokemon-list-by-type/pokemon-list-by-type.component';
import { StatisticsModule } from './statistics/statistics.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { SecurityModule } from './security/security.module';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@NgModule({
  declarations: [AppComponent, ToolbarComponent, ObservablecComponent, ObservableComponent, PageNotFoundComponent, ToolbarComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MaterialsModule,
    CategoriesModule,
    PokemonsModule,
    StatisticsModule,
    MatIconModule,
    SecurityModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    RouterModule.forRoot([
      {path: '', redirectTo:"category-list", pathMatch:"full"},
      {path: '**', component: PageNotFoundComponent}
    ])
  ],
  providers: [
    AngularFireModule,
    AngularFireAuth
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
