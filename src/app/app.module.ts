import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ImageListDirective } from './directives/image-list.directive';

@NgModule({
  imports: [BrowserModule, HttpClientModule],
  declarations: [AppComponent, ImageListDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
