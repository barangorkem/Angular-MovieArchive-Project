import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { RouterModule, Routes, Router } from '@angular/router';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private usersService:UsersService,private router:Router) { }

  ngOnInit() {
    this.usersService.logout();
    this.router.navigate(['']);
    
  }

}
