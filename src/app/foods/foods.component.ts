import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodApiService } from './food-api.service';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {
   public foodList:any=[];
   public loggedUser:any='';
  constructor(private foodService:FoodApiService,
    private rout:Router) { }

  ngOnInit(): void {
    this.loggedUser= sessionStorage.getItem('User')
    this.foodService.getAllFoods()
    .subscribe((res:any)=>{
     // console.log(res);
      this.foodList =res['foodList']
    });
    
   
  }
  onLogout(){
    sessionStorage.clear()
    alert('You Have Successfully Logged Out !')
    this.rout.navigateByUrl('/user')
  }

}
