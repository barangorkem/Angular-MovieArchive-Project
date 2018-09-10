import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { ListFilms } from '../listfilms.model';
import { MovieReview } from './moviereview.model';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-moviereview',
  templateUrl: './moviereview.component.html',
  styleUrls: ['./moviereview.component.css']
})
export class MoviereviewComponent implements OnInit {

  constructor(private movieService:MoviesService) { }
  listfilms: ListFilms[];
  userid:string;
  movieReviewDatamodel=new MovieReview();
  ngOnInit() 
  {
    this.movieService.getListFilms().subscribe((data) => {
      this.listfilms = data;
    })
    this.userid=localStorage.getItem("userid");
  }
  postMovieReviewContent()
  {
    console.log(this.movieReviewDatamodel);
    this.movieService.postAdminSuperUserMovieReview(this.movieReviewDatamodel).subscribe((data)=>
  {
    alert("Tamamlandi.");
  },
  error=>{console.log(error);alert("Daha önce elestirmişsiniz.")}
)
  }
  PutMovieId(filmid:string)
  {
    debugger
   this.movieReviewDatamodel.filmid=filmid;
   this.movieReviewDatamodel.kullaniciid=this.userid;
   console.log(this.movieReviewDatamodel);
  }
  
}
