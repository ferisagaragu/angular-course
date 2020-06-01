import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asynchronous-button',
  templateUrl: './asynchronous-button.component.html',
  styleUrls: ['./asynchronous-button.component.css']
})
export class AsynchronousButtonComponent implements OnInit {

  load: boolean;

  constructor() {
    this.load = false;
  }

  ngOnInit(): void { }

  execute(): void {
    this.load = true;

    setTimeout(() => {
      this.load = false;
    }, 3000);

  }

}
