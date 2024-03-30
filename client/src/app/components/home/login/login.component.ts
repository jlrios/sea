import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from  '../../../models/user';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, 
              private toastr: ToastrService,
              private router: Router) {
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

    this.loading = true;
    setTimeout(()=> {
      if (user.name === "JLRD" && user.password == "admin123") {
        this.router.navigate(['/dashboard']);
      } else {
        this.toastr.error("Usuario y/o contraseña incorrecto(s)");
      }
      this.loading = false;
    }, 3000);

    
    this.login.reset();
  }
}
