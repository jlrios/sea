import { Component } from '@angular/core';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-questionnaires',
  templateUrl: './questionnaires.component.html',
  styleUrl: './questionnaires.component.css'
})

export class QuestionnairesComponent {
  userName: string;

   constructor(private loginService: LoginService) {
    this.userName = ' ';
    this.getUserName();
  }

  getUserName(): void {
    this.userName = this.loginService.getTokenDecoded().sub
  }
}
