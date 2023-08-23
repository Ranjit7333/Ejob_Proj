import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private route:Router){}
  canActivate():boolean {
   const token = sessionStorage.getItem('token');
   if(!token){
     alert('Please login to view this page')
     this.route.navigateByUrl('/user');
     return false;
   }else
   
   return true;
   
  }
  
  
}
