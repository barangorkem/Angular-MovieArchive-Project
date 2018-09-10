import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ThisWeeksMovie} from '../thisweeksmovie.model';
import {MoviesService} from '../movies.service';
import { Comment } from '../comment.model';
import { ToastrService } from 'ngx-toastr';
import { MoviesGrade} from '../moviescontent/moviesgrade.model';
import {Usersthisweeksmoviecomments} from '../moviescontent/usersthisweeksmoviecomments.model';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-moviescontent',
  templateUrl: './moviescontent.component.html',
  styleUrls: ['./moviescontent.component.css']
})
export class MoviescontentComponent implements OnInit {

  commentmodel=new Comment();
  moviesgrade=new MoviesGrade();
  usersthisweeksmoviecomments:Usersthisweeksmoviecomments[];
  today = Date.now();
  isLogin:boolean;
  fixedTimezone = '2015-06-15T09:03:01+0900';
  filmid:number;
  film_grade:string;
  constructor(private route:ActivatedRoute,private movieservice:MoviesService,private toastr:ToastrService,config: NgbRatingConfig,private userService:UsersService) 
  {
    config.max = 5;
    config.readonly = true;
   }
  thisweeksmovie:ThisWeeksMovie;
  ngOnInit() {
    
    let id=parseInt(this.route.snapshot.paramMap.get('id'));
    this.filmid=id;
    this.movieservice.getThisWeeksMovieContent(id).subscribe(data=>this.thisweeksmovie=data);
    if(this.userService.isLogin())
    {
      this.userService.getUserClaims().subscribe((data)=>{
        this.commentmodel.kullaniciid=data.kullaniciid;
       
      });
    }


    this.movieservice.getCommentUser(id).subscribe(res =>this.usersthisweeksmoviecomments=res);
    this.movieservice.getFilmsGrade(this.filmid.toString()).subscribe(data=>{this.film_grade=data;});
  }
  doComment()
  {
    this.movieservice.postCommentUser(this.commentmodel,this.filmid).subscribe(res =>{

      if(res==true)
      {
    this.toastr.success('', 'Yorum başarılıdır.');
    this.movieservice.getCommentUser(this.filmid).subscribe(res =>this.usersthisweeksmoviecomments=res)
  }
    else{
      this.toastr.error('Yorum hatalıdır.', 'Hata')}});
  }

  movieGrade()
  {
    debugger
    this.moviesgrade.filmid=this.filmid.toString();
    this.moviesgrade.kullaniciid=this.commentmodel.kullaniciid;
    this.movieservice.postFilmgrade(this.moviesgrade).subscribe(res =>{
      if(res==true)
      {
        this.movieservice.getFilmsGrade(this.filmid.toString()).subscribe(data=>{this.film_grade=data;});
        this.toastr.success('', 'Puanlama başarılıdır.');
      }
      else
      {
        this.toastr.error('', 'Puanlama da hata.');
      } 
    })
  } 
  }

