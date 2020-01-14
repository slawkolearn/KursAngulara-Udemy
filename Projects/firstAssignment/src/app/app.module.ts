import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstRowComponent } from './first-row/first-row.component';
import { SeconRowFirstColumnComponent } from './secon-row-first-column/secon-row-first-column.component';
import { SeconRowSecondColumnComponent } from './secon-row-second-column/secon-row-second-column.component';
import { ThirdRowComponent } from './third-row/third-row.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstRowComponent,
    SeconRowFirstColumnComponent,
    SeconRowSecondColumnComponent,
    ThirdRowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
