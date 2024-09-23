import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-exercise',
  standalone: true,
  imports: [],
  templateUrl: './exercise.component.html',
  styleUrl: './exercise.component.css',
})
export class ExerciseComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) repsCount!: number;
  @Input({ required: true }) seriesCount!: number;
  @Input({ required: true }) seriesSize!: number;

  @Output() addRep = new EventEmitter<void>();
  @Output() reset = new EventEmitter<void>();
}
