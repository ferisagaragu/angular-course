import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {

  type: string;

  private changes: number;

  constructor() {
    this.changes = 0;
    this.type = 'success';
  }

  ngOnInit(): void { }

  changeType(): void {
    switch (this.changes) {
      case 0:
        this.changes++;
        this.type = 'success';
        break;
      case 1:
        this.changes++;
        this.type = 'danger';
        break;
      case 2:
        this.changes++;
        this.type = 'warning';
        break;
      case 3:
        this.changes++;
        this.type = 'info';
        break;
      default:
        this.changes = 0;
        this.changes++;
        this.type = 'success';
    }
  }

}
