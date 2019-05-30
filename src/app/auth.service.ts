import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

interface myData {
  sucess : boolean,
  message : String
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 private loggedInStatus = false

  
  constructor(private HttpClient : HttpClient) { }

  setLoggedIn(value : boolean){
    this.loggedInStatus = value
  }

  get isloggedIn(){
    return this.loggedInStatus
  }

  getUserDetails(username,password){
    // get 
    console.log("inside service")
    return this.HttpClient.post<myData>('/api/auth.php', {username,password})
    
  }

}
