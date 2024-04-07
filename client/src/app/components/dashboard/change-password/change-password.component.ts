import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})

export class ChangePasswordComponent {
  changePassword: FormGroup;
  loading = false;
  constructor(private fb: FormBuilder,
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router) {
    this.changePassword = this.fb.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['']
    }, { validator: this.checkPassword });
  }

  checkPassword(group: FormGroup): any {
    const pass = group.controls['newPassword'].value;
    const confPass = group.controls['confirmPassword'].value;

    return pass === confPass ? null: { notSame: true }
  }

  savePassword(): void {
    console.log(this.changePassword);

    const changePassword: any = {
      oldPassword: this.changePassword.value.oldPassword,
      newPassword: this.changePassword.value.newPassword
    }

    console.log(changePassword);
    
    this.loading = true
    this.userService.changePassword(changePassword).subscribe(data => {
      this.toastr.info(data.message);
      this.router.navigate(['/dashboard']);
    }, error => {
      this.loading = false;
      this.changePassword.reset();
      this.toastr.error(error.error.message, 'Cambiar contraseña')
    });

  }
}

