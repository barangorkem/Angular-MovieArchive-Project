import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users.service';
import { User } from '../../user.model';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {NgForm} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-users-admin',
  templateUrl: './users-admin.component.html',
  styleUrls: ['./users-admin.component.css']
})
export class UsersAdminComponent implements OnInit {

  userdata=new User();
  getusersData:User[];
  updateuserData=new User();
  constructor(private userService:UsersService,private location:Location) { }
  ngOnInit() {
    this.userdata.kullaniciyetki="User";
    this.userService.userAdminGetData().subscribe((data)=>{
      this.getusersData=data;
     
    });
  }
  resetForm(form?:NgForm)
  {
    if(form!=null)
    form.reset()
    this.userdata={
      kullaniciid:'',
      kullaniciadi :'',
      kullanicisifre : '',
      kullaniciemail : '',
      kullaniciyetki : 'User'

    }
  }
  postAdminAddUserData(f:NgForm)
  {
    debugger
    this.userService.userAdminRegister(this.userdata).subscribe((data)=>{
      debugger
     alert("Kayit tamamlandi.")
      this.userService.userAdminGetData().subscribe((data)=>{
        this.getusersData=data;

        this.resetForm(f);
      },
      
      (error:HttpErrorResponse) => {console.error(error.error);alert(error.error);}
    );
     
    })
    
    
  }

  getAdminFindUserData(userid:string)
  {
    this.userService.userAdminFindData(userid).subscribe((data)=>{
      this.updateuserData=data;
      console.log(this.updateuserData);
    })
  }
  putUpdateUserData()
  {
    this.userService.userAdminUpdateData(this.updateuserData).subscribe((data)=>{
      alert('Güncelleme tamamlandi.');
      window.location.reload();
    })
  } 
  deleteAdminUserData(userid:string)
  {
    debugger
    this.userService.userAdminDeleteData(userid).subscribe((data)=>{
      alert("Silme işlemi başarılı.");
      this.userService.userAdminGetData().subscribe((data)=>{
        this.getusersData=data;
    
      });
    })
  }

}
