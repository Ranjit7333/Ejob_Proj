import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
signUp(data:any){
  return this.http.post('https://rest-food-api.glitch.me/api/user/login',data);
}


}


