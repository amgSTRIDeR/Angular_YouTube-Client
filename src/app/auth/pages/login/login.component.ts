import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import LoginService from '../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export default class LoginComponent {
  constructor(private loginService: LoginService, private fb: FormBuilder) {}

  loginForm = this.fb.group({
    login: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [
        Validators.required,
        this.minLengthValidator,
        this.hasUppercaseValidator,
        this.hasLowercaseValidator,
        this.hasNumberValidator,
        this.specialSymbolsValidator,
      ],
    ],
  });

  minLengthValidator(control: FormControl): ValidationErrors | null {
    return control.value.length > 8 ? null : { weakPassword: true };
  }

  hasUppercaseValidator(control: FormControl): ValidationErrors | null {
    return /[A-Z]/.test(control.value) ? null : { hasnotUppercase: true };
  }

  hasLowercaseValidator(control: FormControl): ValidationErrors | null {
    return /[a-z]/.test(control.value) ? null : { hasnotLowercase: true };
  }

  hasNumberValidator(control: FormControl): ValidationErrors | null {
    return /\d/.test(control.value) ? null : { hasnotNumber: true };
  }

  specialSymbolsValidator(control: FormControl): ValidationErrors | null {
    return /[!@#?]/.test(control.value) ? null : { lackOfSpecialSymbols: true };
  }

  get login() {
    return this.loginForm.get('login');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    if (this.login?.value && this.password?.value) {
      this.loginService.userLogin(this.login.value, this.password.value);
    }
  }
}
