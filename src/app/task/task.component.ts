import { Task } from '../task.model'
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent {
  @Input() task: Task | undefined 
  @Output() completeTask = new EventEmitter<Task>()

  onComplete(task: Task | undefined) {
    if(task) {
      task.completed = true
      this.completeTask.emit(task)
    }
  }
}