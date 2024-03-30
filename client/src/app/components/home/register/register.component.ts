import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['', Validators.required]
    },
    { validator: this.checkPassword });
  }

  userSignUp(): void {
    console.log(this.register);
  }

  checkPassword(group: FormGroup): any {
    const pass = group.controls['password'].value;
    const confPass = group.controls['confirmPassword'].value;

    return pass === confPass ? null: { notSame: true }
  }
}
