import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { QdtDirective } from './directive/qdt.directive';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, QdtDirective],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
