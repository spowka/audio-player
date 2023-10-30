import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'songDuration',
  standalone: true
})
export class SongDurationPipe implements PipeTransform {
  transform(value: number): any {
    const minutes = Math.floor(value / 60);
    const seconds = +(value % 60).toFixed();
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
}
