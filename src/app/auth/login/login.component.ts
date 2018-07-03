import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}
  email: string;
  password: string;
  ngOnInit() {}

  onLogin(form) {
    this.authService.login(form.value.email, form.value.password);
  }
}
