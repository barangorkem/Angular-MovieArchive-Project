import { Component, OnInit } from '@angular/core';
import { ListFilms } from '../listfilms.model';
import {MoviesService} from '../movies.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Comment } from '../comment.model';
import { ToastrService } from 'ngx-toastr';
import { Usersthisweeksmoviecomments } from '../moviescontent/usersthisweeksmoviecomments.model';
import { Categories } from '../categories.model';
import { Actors } from '../actors.model';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-filmscontent',
  templateUrl: './filmscontent.component.html',
  styleUrls: ['./filmscontent.component.css']
})
export class FilmscontentComponent implements OnInit {

  constructor(private route:ActivatedRoute,private movieservice:MoviesService,private toastr:ToastrService,private router:Router,private userService:UsersService) { }
  commentmodel=new Comment();
  actorsname:String[];
  filmid:number;
  categoriesdata:Categories[];
  film_grade:number;
  listfilmscontent:ListFilms;
  userslistfilmscomments:Usersthisweeksmoviecomments[];
  ngOnInit() 
  {
  debugger
    let id=parseInt(this.route.snapshot.paramMap.get('filmid'));

    this.filmid=id;
    this.movieservice.getListFilmsContent(id).subscribe(data=>this.listfilmscontent=data);
    this.movieservice.getCategoriesName().subscribe(data=>{this.categoriesdata=data;});
    if(this.userService.isLogin())
    {
    
      this.userService.getUserClaims().subscribe((data)=>{
        this.commentmodel.kullaniciid=data.kullaniciid;
       
      });
    }
    this.movieservice.getListFilmsCommentUser(id).subscribe(res =>this.userslistfilmscomments=res)
    this.movieservice.getListFilmsActors(id).subscribe(data=>{this.actorsname=data;})
    
  }
  doComment()
  {

   
    this.movieservice.postCommentListFilmsUser(this.commentmodel,this.filmid).subscribe(res =>{

      if(res==true)
      {
    this.toastr.success('', 'Yorum başarılıdır.');
    this.movieservice.getListFilmsCommentUser(this.filmid).subscribe(res =>this.userslistfilmscomments=res)
  }
    else
    {
      this.toastr.error('Yorum hatalıdır.', 'Hata')}});
  }
  getFilmActors(oyuncuadi:string)
  {

    this.router.navigate(['filmsactors',oyuncuadi]);
  }
  navigateCategoriesContent(kategoriid:number)
  {
    this.router.navigate(['categoriescontent',kategoriid]);
  }
}
