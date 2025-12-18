import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: 'app-task-date-input',
  templateUrl: './task-date-input.component.html',
  styleUrls: ['./task-date-input.component.css'] // optional, for styling
})
export class TaskDateInputComponent implements OnChanges {
  @Input() taskDate: string = ''; // Expected format: YYYY-MM-DDTHH:mm:ss or similar ISO
  @Output() taskDateChange = new EventEmitter<string>();

  datePart: string = ''; // YYYY-MM-DD
  timePart: string = ''; // HH:mm

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['taskDate'] && this.taskDate) {
      const date = new Date(this.taskDate);
      this.datePart = date.toISOString().slice(0, 10);       // YYYY-MM-DD
      this.timePart = date.toTimeString().slice(0, 5);        // HH:mm (local time)
    } else if (!this.taskDate) {
      this.datePart = '';
      this.timePart = '';
    }
  }

  private emitCombinedDateTime(): void {
    if (this.datePart && this.timePart) {
      const combined = `${this.datePart}T${this.timePart}:00`;
      this.taskDateChange.emit(combined);
    } else if (this.datePart) {
      // Only date selected → default to 12:00
      this.taskDateChange.emit(`${this.datePart}T12:00:00`);
    } else {
      this.taskDateChange.emit('');
    }
  }

  onDateChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.datePart = target.value;
    this.emitCombinedDateTime();
  }

  onTimeChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.timePart = target.value;
    this.emitCombinedDateTime();
  }
}