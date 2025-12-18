import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeLeft',})
export class TimeLeftPipe implements PipeTransform {
  transform(dueDate: Date): string {
    if (!dueDate) return 'No due date provided';

    const now = new Date();
    const secondsLeft = this.calculateSecondsDifference(dueDate, now);
    const timeUnits = this.calculateTimeUnits(secondsLeft);
    const formattedUnits = this.formatTimeUnits(timeUnits);

    if (secondsLeft <= 0) {
      return 'Time is up';
    }

  return formattedUnits + " left";
  }

  private calculateSecondsDifference(dueDate: Date, currentDate: Date): number {
    return Math.floor((dueDate.getTime() - currentDate.getTime()) / 1000);
  }

  private calculateTimeUnits(secondsLeft: number): { days: number; hours: number; minutes: number } {
    const days = Math.floor(secondsLeft / (3600 * 24));
    const hours = Math.floor((secondsLeft % (3600 * 24)) / 3600);
    const minutes = Math.floor((secondsLeft % 3600) / 60);

    return { days, hours, minutes };
  }

  private formatTimeUnits(timeUnits: { days: number; hours: number; minutes: number }): string {
    let result = '';
    if (timeUnits.days > 0) {
      result += `${timeUnits.days} day${timeUnits.days > 1 ? 's' : ''} `;
    }
    if (timeUnits.hours > 0) {
      result += `${timeUnits.hours} hour${timeUnits.hours > 1 ? 's' : ''} `;
    }
    if (timeUnits.minutes > 0) {
      result += `${timeUnits.minutes} minute${timeUnits.minutes > 1 ? 's' : ''} `;
    }
    return result.trim();
  }
}