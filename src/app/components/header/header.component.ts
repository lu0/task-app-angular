import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public title: string = 'Task Tracker';
  public isAddFormShown: boolean = false;
  private subscription: Subscription;

  // The constructur runs when the component is initialized
  constructor(
    private uiService: UiService
  ) {
    this.subscription = this.uiService.onToggleAddTask()
    .subscribe((isAddFormShown: boolean) => {
      this.isAddFormShown = isAddFormShown;
    })
  }

  // Lifecycle method used most of the time
  // run when the component loads
  ngOnInit(): void {
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }
}
