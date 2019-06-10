import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LassocreateComponent } from './lassocreate/lassocreate.component';

@NgModule({
  declarations: [
    AppComponent,
    LassocreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
