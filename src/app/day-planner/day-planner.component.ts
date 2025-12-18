import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Task } from '../task.model';
import { TaskComponent } from '../task/task.component'
import { AddTaskComponent } from '../add-task/add-task.component'
import { TimeLeftPipe } from '../time-left.pipe';
import { HighlightDirective } from '../highlight.directive'

const today = new Date()
@Component({
  selector: 'app-day-planner',
  imports: [TaskComponent, AddTaskComponent, DatePipe, TimeLeftPipe, HighlightDirective],
  templateUrl: './day-planner.component.html',
  styleUrl: './day-planner.component.css'
})

export class DayPlannerComponent {
  tasks: Task[] = [
    { id: 1, name: 'Meeting with team', time: new Date(new Date().setHours(21)), isDueToday: true, completed: false },
    { id: 2, name: 'Client presentation', time: new Date(new Date().setMinutes(59)), isDueToday: true, completed: false },
    { id: 3, name: 'Project deadline', time: new Date(new Date().setMonth(today.getMonth() + 1)), isDueToday: false, completed: false },
    { id: 4, name: 'Team outing', time: new Date('Sat Apr 20 2024 13:00:00 GMT+0530'), isDueToday: false, completed: true },
    { id: 5, name: 'Software update', time: new Date(), isDueToday: true, completed: false }
  ];

  selectedTask: Task | undefined = undefined

  selectTask(task: Task) {
    this.selectedTask = task
  }

  getNextTaskId() {
    const maxIndex = (this.tasks.length - 1)
    return this.tasks[maxIndex].id + 1
  }

  handleCompleteTask(task: Task | undefined) {
    this.selectedTask = undefined;
  }

  handleNewTask(taskData: { name: string; date: string }) {
    // taskData.date is like "2025-12-15T14:30:00"
    const newDate = new Date(taskData.date);

    const today = new Date();
    const isDueToday =
      newDate.getFullYear() === today.getFullYear() &&
      newDate.getMonth() === today.getMonth() &&
      newDate.getDate() === today.getDate();

    const newTask: Task = {
      id: this.getNextTaskId(),
      name: taskData.name,
      time: newDate,
      isDueToday,
      completed: false
    };

    this.tasks.push(newTask);
  }
}