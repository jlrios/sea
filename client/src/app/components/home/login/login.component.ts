import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from  '../../../models/user';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';

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
              private router: Router,
              private loginService: LoginService) {
    this.login = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  log(): void {
    const user: User = {
      name: this.login.value.user,
      password: this.login.value.password
    }

    this.loading = true;
    this.loginService.login(user).subscribe(data => {
      console.log(data);
      this.loading = false;
      this.loginService.setLocalStorage(data.token);
      this.router.navigate(['/dashboard'])
    }, error => {
      console.log(error);
      this.loading = false;
      this.toastr.error(error.error.message, 'Error');
      this.login.reset();
    });

    /*setTimeout(()=> {
      if (user.name === "JLRD" && user.password == "admin123") {
        this.router.navigate(['/dashboard']);
      } else {
        this.toastr.error("Usuario y/o contraseña incorrecto(s)");
      }
      this.loading = false;
    }, 3000);*/

    
    this.login.reset();
  }
}
