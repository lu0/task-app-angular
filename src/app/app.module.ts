import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http'

// This is the root component
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TasksItemComponent } from './components/tasks-item/tasks-item.component';

@NgModule({
  // Declarations are for components
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TasksItemComponent
  ],
  // Used to interact with the DOM
  // HTTP and Forms will be here
  // Imports are for modules
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  // Any global services/providers
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
