import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { ProjectsComponent } from './home/projects/projects.component';
import { FormComponent } from './home/form/form.component';
import { MenuComponent } from './home/home/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProjectsComponent,
    FormComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
