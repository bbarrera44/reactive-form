import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/*components */
import { AppComponent } from './components/app/app.component';
import { ReactiveFormsModule } from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
