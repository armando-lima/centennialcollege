import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
  }

  register(){
    let bodyData = {
      username: this.username,
      email: this.email,
      password: this.password
    }

    this.http.post('http://localhost:4000/user/save', bodyData).subscribe((data: any) => {
      console.log(data);
      alert('User registered successfully!');
    });
  }
}
