import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodApiService {

  constructor(private http:HttpClient) { }
  getAllFoods(){
    return this.http.get('https://rest-food-api.glitch.me/api/foods');
  }

}
