import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ExerciseComponent } from './components/exercise/exercise.component';
import { NgFor } from '@angular/common';

type exerciseType = {
  name: string;
  repsCount: number;
  seriesCount: number;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ExerciseComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  exercises: exerciseType[] = [
    {
      name: 'Brzuszki',
      repsCount: 0,
      seriesCount: 0,
    },
    {
      name: 'Pompki',
      repsCount: 0,
      seriesCount: 0,
    },
    {
      name: 'Przysiady',
      repsCount: 0,
      seriesCount: 0,
    },
  ];

  seria = 10;

  increment(index: number) {
    this.exercises[index].seriesCount +=
      this.exercises[index].repsCount == this.seria ? 1 : 0;
    this.exercises[index].repsCount %= this.seria;
    this.exercises[index].repsCount += 1;
  }

  reset(index: number) {
    this.exercises[index].repsCount = 0;
    this.exercises[index].seriesCount = 0;
  }
}
