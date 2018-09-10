import { Component, OnInit } from '@angular/core';
import {User} from '../user.model';
import {UsersService} from '../users.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[UsersService]
})
export class RegisterComponent implements OnInit {

  model=new User();
  warning:String;
  constructor(private usersService:UsersService,private toastr:ToastrService) { }
  
  ngOnInit() {
  }
  onRegister()
  {
    this.usersService.postRegisterUser(this.model).subscribe(res =>
      {if(res==true)
      {this.toastr.success('Kayıt işlemi başarılıdır.', 'Tebrikler');}
      else{this.toastr.error('Böyle bir kullanici adi bulunmaktadir.', 'Hata')
    }
  });
  }
}
