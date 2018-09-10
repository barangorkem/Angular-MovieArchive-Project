import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,RouteReuseStrategy, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from 'C:/Users/baran/Desktop/FilmArsiv/FilmArsivProje/src/app/users.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router,private userService:UsersService,private route:ActivatedRoute)
  {
    
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    debugger  
      if(localStorage.getItem("access_token")!=null)
      {
        debugger
        
        
        let roles=next.data["roles"] as Array<string>;
       
        if(roles) {
          debugger
          var match=this.userService.roleMatch(roles);
          if(match)
          { 
            return true;
          }
          else
          {
            this.router.navigate(['forbidden']);
            return false;
          }
        }
      return true;
      }
      else
      {
      this.router.navigate(['']);
      return false;
      }
  }
}
