import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { ListLivresComponent } from './list-livres/list-livres.component';
import { SearchComponent } from './search/search.component';
import { LivreItemComponent } from './livre-item/livre-item.component';

const appRoutes : Routes = [
  {path : ''  , component : ListLivresComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    ListLivresComponent,
    SearchComponent,
    LivreItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
