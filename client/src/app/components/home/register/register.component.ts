import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  register: FormGroup;
  
  constructor(private fb:FormBuilder, private userService: UserService) {
    this.register = this.fb.group({
      user: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['', Validators.required]
    },
    { validator: this.checkPassword });
  }

  userSignUp(): void {
    console.log(this.register);

    const user: User = {
      name: this.register.value.user,
      password: this.register.value.password
    }

    this.userService.saveUser(user).subscribe(data => {
      console.log(data);
    });    
  }

  checkPassword(group: FormGroup): any {
    const pass = group.controls['password'].value;
    const confPass = group.controls['confirmPassword'].value;

    return pass === confPass ? null: { notSame: true }
  }
}