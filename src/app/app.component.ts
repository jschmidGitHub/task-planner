import { Component } from '@angular/core';
import { DayPlannerComponent } from './day-planner/day-planner.component';

@Component({
  selector: 'app-root',
  imports: [DayPlannerComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Daily Planner';

}