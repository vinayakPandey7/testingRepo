import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private AuthService : AuthService,
    private router :Router
    
    ) { }

  ngOnInit() {
  }

  loginUser(event){
    event.preventDefault()
    const username = event.target.querySelector('#username').value;
    const password = event.target.querySelector('#password').value
    console.log(event)
    console.log(username,password)

    this.AuthService.getUserDetails(username, password).subscribe(data => {
      if (data.sucess)
      {
        // if true redirect to admin page
        this.router.navigate(['admin']);
        this.AuthService.setLoggedIn(true)
      }
      else {
        alert("invalid credentials"+data.message)
      }
    })
    console.log(username,password)
  }

}
