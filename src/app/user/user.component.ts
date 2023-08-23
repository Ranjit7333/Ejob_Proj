import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './modal/User';
import {UsersService} from './users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public userInfo = new User('','',); 
  
  constructor( private UserService:UsersService,
    private route:Router  ) { }

  ngOnInit(): void {

  }
    onSubmit(){
     // console.log(this.userInfo)
        const data ={'email':this.userInfo.email,
                      'pass1':this.userInfo.pass1,
                        };
                         // console.log(data)
     this.UserService.signUp(data)
     .subscribe((res:any)=>{
      // console.log(res);
       if(res.message == 'success'){
         sessionStorage.setItem('token',res.token)
         sessionStorage.setItem('User',res.loggedUser)
         alert('wellcome  ' + res.loggedUser)
         this.route.navigateByUrl('/foods')
       }else{alert(res.message)} 
     });
    }


  
}



