import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RulesFormModule } from './rules/rules-form.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RulesFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
