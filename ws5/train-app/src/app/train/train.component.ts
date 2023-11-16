import {Component, Input, NO_ERRORS_SCHEMA, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-train',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './train.component.html',
  styleUrl: './train.component.css'
})
export class TrainComponent implements OnInit {
  @Input() departs: string = '';
  @Input() destination: string = '';
  @Input() platform: string = '';
  constructor() { }

  ngOnInit(): void {
  }
}
