import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  isLogin: boolean = false;
  errorMessage: string = '';

  constructor(private router: Router, private http: HttpClient) {

  }

  ngOnInit(): void {
  }

  login(){
    let bodyData = {
      email: this.email,
      password: this.password
    }

    this.http.post('http://localhost:4000/user/login', bodyData).subscribe((data: any) => {
      if (data.status) {
        this.isLogin = true;
        this.router.navigate(['/home']);
        console.log(data);
      }
      else{
        this.isLogin = false;
        this.errorMessage = data.message;
        console.log(this.errorMessage);
      }
    });
  }
}
