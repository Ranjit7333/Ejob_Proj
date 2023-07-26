import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SignsService {

constructor(private http:HttpClient) { }
signUp(data:any){
  return this.http.post('https://rest-food-api.glitch.me/api/user/signup',data);
}
}