import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})

export class ChangePasswordComponent {
  changePassword: FormGroup;

  constructor(private fb: FormBuilder) {
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
  }
}

