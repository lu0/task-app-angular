import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from 'Task'
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  public task: Task;
  public showForm: boolean = false;
  private subscription = new Subscription();

  constructor(
    private uiService: UiService
  ) {
    this.subscription = this.uiService.onToggleAddTask()
    .subscribe((isAddFormShown) => {
      this.showForm = isAddFormShown;
    })
  }

  ngOnInit(): void {
      this.task = {} as Task;
  }

  validateThenSubmit() {
    if (!this.task.day) {
      alert("Insert a day!");
      return;
    }
    if (!this.task.text) {
      alert("Insert a title!");
      return;
    }
    this.onAddTask.emit(this.task);
    this.ngOnInit();
  }
}
