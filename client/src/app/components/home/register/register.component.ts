import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Form } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  register: FormGroup;
  
  constructor(private fb:FormBuilder) {
    this.register = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
      //password: ['', Validators.required, Validators.minLength(4)],
      confirmPassword: ['', Validators.required]
    })
  }

  userSignUp(): void {
    console.log(this.register);
  }
}
