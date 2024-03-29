import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from  '../../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login: FormGroup;

  constructor(private fb: FormBuilder) {
    this.login = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  log(): void {
    console.log(this.login);
    
    const user: User = {
      name: this.login.value.user,
      password: this.login.value.password
    }

    console.log(user);
  }
}
