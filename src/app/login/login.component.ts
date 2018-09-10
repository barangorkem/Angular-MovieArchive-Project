import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UsersService } from '../users.service';
import { ToastrService } from 'ngx-toastr';
import { RouterModule, Routes, Router } from '@angular/router';
import { timer, Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { map, filter, scan } from 'rxjs/operators';
import {HttpClient,HttpHeaders, HttpErrorResponse} from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model=new User();
  constructor(private usersService:UsersService,private toastr:ToastrService,private router:Router) { }
  
  ngOnInit() {
    if(this.usersService.isLogin())
    {
      this.router.navigate(['']);
    }
  }
  onLogin()
  {
    debugger
    this.usersService.postLoginUser(this.model.kullaniciadi,this.model.kullanicisifre).subscribe((res):any =>{
      debugger
     
    this.toastr.success('Anasayfaya Yönlendiriliyorsunuz.', 'Giriş başarılıdır.');
    console.log(res);
    localStorage.setItem("access_token", res['access_token']);
    localStorage.setItem("role",res['role']);
    setTimeout(() => {
      this.router.navigate(['']);
     }, 3000);
    },
  (err:HttpErrorResponse)=>{
    debugger
    this.toastr.error('Hata!', 'Kullanici adi veya sifre yanlis!');
  }
  );
  }

}
