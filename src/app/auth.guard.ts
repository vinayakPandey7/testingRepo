import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './auth.service'
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isloggedIn: boolean | Observable<boolean> | Promise<boolean>;

  constructor(private AuthService : AuthService){}
  canActivate(
    next : ActivatedRouteSnapshot,
    state : RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean {
    return this.AuthService.isloggedIn;
    }

    
  }

