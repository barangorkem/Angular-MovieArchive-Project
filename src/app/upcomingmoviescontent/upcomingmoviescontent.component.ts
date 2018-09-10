import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService} from '../movies.service';
import { UpComingMovie} from '../upcomingmovies.model';
import { Comment } from '../comment.model';
@Component({
  selector: 'app-upcomingmoviescontent',
  templateUrl: './upcomingmoviescontent.component.html',
  styleUrls: ['./upcomingmoviescontent.component.css']
})
export class UpcomingmoviescontentComponent implements OnInit {

  constructor(private route:ActivatedRoute,private movieservice:MoviesService) { }
  commentmodel=new Comment();
  upcomingmovie:UpComingMovie;
  today = Date.now();
  isLogin:boolean;
  fixedTimezone = '2015-06-15T09:03:01+0900';
  filmid:number;
  film_grade:number;
  ngOnInit() {
    let id=parseInt(this.route.snapshot.paramMap.get('id'));
    this.filmid=id;
    this.movieservice.getUpComingMovieContent(id).subscribe(data=>this.upcomingmovie=data);
    if(localStorage.getItem("isLogin")=="true")
    {
      this.isLogin=true;
      this.commentmodel.kullaniciid=localStorage.getItem("kullaniciid");
    }
    else
    {
      this.isLogin=false;
    }
  }

}
