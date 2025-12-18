import { Component, EventEmitter, Output } from '@angular/core';
import { TaskDateInputComponent } from '../task-date-input/task-date-input.component';
import { TaskNameInputComponent } from '../task-name-input/task-name-input.component';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  imports: [TaskDateInputComponent, TaskNameInputComponent]
})
export class AddTaskComponent {
  newTaskName: string = ""
  newTaskDate: string = ""

  @Output() addTaskEvent = new EventEmitter<{ name: string; date: string }>()
  addTask() {
    if(this.newTaskName && this.newTaskDate) {
      this.addTaskEvent.emit({name: this.newTaskName, date: this.newTaskDate})
      this.newTaskName = ""
      this.newTaskDate = ""
    }
  }
}