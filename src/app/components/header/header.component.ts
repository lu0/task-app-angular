import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title: string = 'Task Tracker';

  // The constructur runs when the component is initialized
  constructor() { }

  // Lifecycle method used most of the time
  // run when the component loads
  ngOnInit(): void {
  }

  toggleAddTask() {
    console.log('toggle')
  }
}
