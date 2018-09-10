import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { Categories } from '../categories.model';
import {MoviesService} from '../movies.service';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogin:boolean;
  model:User;
  categoriesdata:Categories[];
  constructor(private movieservice:MoviesService,private userService:UsersService,private router:Router) { 
    if(this.userService.isLogin())
    {
      this.userService.getUserClaims().subscribe((data)=>{
        localStorage.setItem("userid",data.kullaniciid);
        this.model=data;
      });
      //localStorage.setItem("kullaniciid",this.model.kullaniciid.toString())
    }

  }

  ngOnInit() {
    
  }

}
