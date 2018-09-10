import { Component, OnInit } from '@angular/core';
import { SuperUserReviews } from '../moviereview/superuserreview.model';
import { MoviesService } from '../movies.service';
import { MovieReview } from '../moviereview/moviereview.model';

@Component({
  selector: 'app-my-movie-reviews',
  templateUrl: './my-movie-reviews.component.html',
  styleUrls: ['./my-movie-reviews.component.css']
})
export class MyMovieReviewsComponent implements OnInit {

  constructor(private movieService:MoviesService) { }
  superUserReviews:SuperUserReviews[];
  updateMovieReviews=new MovieReview();
  userid:string;
  ngOnInit() {
      this.userid=localStorage.getItem("userid");
      this.movieService.getSuperUserListMovieReviewsData(this.userid).subscribe((data)=>{
        this.superUserReviews=data;
      },
    error=>{
      console.log(error);
    })
  }
 postMovieReview(modelData:SuperUserReviews)
  {
   
    this.movieService.postSuperUserListData(modelData).subscribe((data)=>{
     
      this.updateMovieReviews=data;
    })
  }
  updateMovieReviewsData()
  {
    console.log(this.updateMovieReviews);
    this.movieService.postSuperUserUpdateMovieReviewData(this.updateMovieReviews).subscribe((data)=>{
      debugger
      window.location.reload();
    },(error)=>{
      console.log(error);
    }
    );
  }

}
