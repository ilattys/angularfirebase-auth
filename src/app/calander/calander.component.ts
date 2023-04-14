import { Component } from '@angular/core';
import {AuthService} from "../shared/services/auth.service";

@Component({
  selector: 'app-calander',
  templateUrl: './calander.component.html',
  styleUrls: ['./calander.component.css']
})
export class CalanderComponent {
  constructor(public auth: AuthService) {}

}
