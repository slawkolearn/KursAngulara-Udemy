import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstRowComponent } from './first-row/first-row.component';
import { SeconRowFirstColumnComponent } from './secon-row-first-column/secon-row-first-column.component';
import { SeconRowSecondColumnComponent } from './secon-row-second-column/secon-row-second-column.component';
import { ThirdRowComponent } from './third-row/third-row.component';
import { ItemComponentComponent } from './item-component/item-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstRowComponent,
    SeconRowFirstColumnComponent,
    SeconRowSecondColumnComponent,
    ThirdRowComponent,
    ItemComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
