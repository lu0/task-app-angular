import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// This is the root component
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TasksItemComponent } from './components/tasks-item/tasks-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TasksItemComponent
  ],
  // Used to interact with the DOM
  // HTTP and Forms will be here
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  // Any global services/providers
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
