import {Component, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {HttpClient, HttpClientModule } from '@angular/common/http';
import {TrainComponent} from "./train/train.component";

@Component({
  selector: 'train-app',
  standalone: true,
    imports: [CommonModule, RouterOutlet, HttpClientModule, TrainComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'train-app';
  trains: any[] = [];

  constructor(public httpClient: HttpClient) {
  }

  ngOnInit() {
    console.log("fetching data...");
    this.httpClient.get("https://web.socem.plymouth.ac.uk/COMP3006/trains/trains/")
        .subscribe((res: any) => {
          console.log(this.trains);
          this.trains = res.trains;
        });

  }
}
