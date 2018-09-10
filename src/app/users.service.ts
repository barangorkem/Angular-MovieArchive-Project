import { Injectable, Type } from '@angular/core';
import {HttpClient,HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {User} from '../app/user.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {throwError} from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  postRegisterUser(usersData:User)
  {
    
    let Options = {
      headers: new HttpHeaders({
     'Content-Type': 'application/json'
   })
     };
    var body=JSON.stringify(usersData);
 
    return this.http.post("http://localhost:52870/api/PostKullaniciKayit",body,Options);
  }
  
  postLoginUser(username:string,password:string)
  {
   debugger
    var body="username="+username+"&password="+password+"&grant_type=password";
    let Options = {
      headers: new HttpHeaders({
     'Content-Type': 'application/x-www-form-urlencoded'
   })
     };
     var objectData=JSON.stringify(body);

    return this.http.post("http://localhost:52870/token",body,Options);
  
  }
  getUserClaims()
  {
    debugger
      
         var data='Bearer '+localStorage.getItem("access_token");
          return this.http.get<User>("http://localhost:52870/api/GetUserClaims",
          {headers:new HttpHeaders({
            'Authorization':data})});
        
  }
  isLogin()
  {
   
    if(localStorage.getItem("access_token")!=null)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  logout() {
   
    // remove user from local storage to log user out
     localStorage.removeItem("access_token");
      localStorage.removeItem("role");
      localStorage.removeItem("userid");
    }
    roleMatch(allowedRoles):boolean {
     
    if(localStorage.getItem('access_token')!=null)
    {
    var isMatch=false;

    var userRoles:string []=JSON.parse(localStorage.getItem('role'));
   
    allowedRoles.forEach(function(item){
      if(userRoles.indexOf(item)>-1)
      {
        
      
        isMatch=true;
        return false;
      }
    });
  }
  else
  {
    isMatch=false;
  }
  return isMatch;
    }

    userAdminGetData()
    {
      var data='Bearer '+localStorage.getItem("access_token");
      let Options = {
        headers: new HttpHeaders({
       'Content-Type': 'application/json',
       'Authorization':data
     })
       };
     return this.http.get<User[]>("http://localhost:52870/api/Kullanicilars",Options);
    }
    userAdminRegister(userData:User)
    {
      var data='Bearer '+localStorage.getItem("access_token");
      let Options = {
        headers: new HttpHeaders({
       'Content-Type': 'application/json',
       'Authorization':data
     })
       };
      var body=JSON.stringify(userData);
       
      return this.http.post("http://localhost:52870/api/Kullanicilars",body,Options)
    }
    userAdminFindData(userid:string)
    {
      var data='Bearer '+localStorage.getItem("access_token");
      let Options = {
        headers: new HttpHeaders({
       'Content-Type': 'application/json',
       'Authorization':data
     })
       };
     return this.http.get<User>("http://localhost:52870/api/Kullanicilars/"+userid,Options);
    }
    userAdminUpdateData(userUpdateData:User)
    {
      debugger
      var data='Bearer '+localStorage.getItem("access_token");
      var body=JSON.stringify(userUpdateData);
      let Options = {
        headers: new HttpHeaders({
       'Content-Type': 'application/json',
       'Authorization':data
     })
       };
     return this.http.put("http://localhost:52870/api/Kullanicilars/"+userUpdateData.kullaniciid,body,Options);
    }
    userAdminDeleteData(userid:string)
    {
      debugger
      var data='Bearer '+localStorage.getItem("access_token");
      let Options = {
        headers: new HttpHeaders({
       'Content-Type': 'application/json',
       'Authorization':data
     })
       };
      return this.http.delete("http://localhost:52870/api/Kullanicilars/"+userid,Options);
    }
}
