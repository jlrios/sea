import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { error } from 'console';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  register: FormGroup;
  loading = false;

  constructor(
      private fb:FormBuilder, 
      private userService: UserService,
      private router: Router,
      private toastr: ToastrService
    ) {
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
    
    this.loading = true;
    this.userService.saveUser(user).subscribe(data => {
      console.log(data);
      this.toastr.success('Usuario ' + user.name + ' fue registrado exitosamente', 'Registro de usuario');
      this.router.navigate(['/home/login']);
    this.loading = false;
    }, error => {
      this.loading = false;
      this.toastr.error(error.error.message, 'Registro de usuario');
      this.register.reset();
    });    
  }

  checkPassword(group: FormGroup): any {
    const pass = group.controls['password'].value;
    const confPass = group.controls['confirmPassword'].value;

    return pass === confPass ? null: { notSame: true }
  }
}