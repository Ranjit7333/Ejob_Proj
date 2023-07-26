import { Component, OnInit } from '@angular/core';
import {SignsService} from './signs.service';
import {sign} from './modal/sign';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
 public userInfo= new sign('','','');
 
  constructor(private SignsService:SignsService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    const data ={'uname':this.userInfo.name,
                  'email':this.userInfo.email,
                  'pass1':this.userInfo.pass1
                    }
        this.SignsService.signUp(data)
        .subscribe((res:any)=>{
          console.log(res);
          if(res.message == 'success')
          alert('You have a successfully registered with us !')
          else
          alert(res.message);
        });          
  }

}
