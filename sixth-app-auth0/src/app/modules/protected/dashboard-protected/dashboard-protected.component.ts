import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../core/http/auth.service";

@Component({
  selector: 'app-dashboard-protected',
  templateUrl: './dashboard-protected.component.html',
  styleUrls: ['./dashboard-protected.component.css']
})
export class DashboardProtectedComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

}
