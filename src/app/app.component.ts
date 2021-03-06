// Structure for every component
import { Component } from '@angular/core';

// Component decoration
// Specify things like template, style sheet.
@Component({
  // The tag to use to embed the component
  selector: 'app-root',
  templateUrl: './app.component.html',
  // You can have more than 1 :O
  styleUrls: ['./app.component.scss']
})

// The main class with any properties and methods of the component
// custom, lifecycle methods, ...
export class AppComponent {
  // text: string = 'Hello world!';
}
