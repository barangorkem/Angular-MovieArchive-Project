import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SuperUserReviews } from '../moviereview/superuserreview.model';
import { MoviesService } from '../movies.service';
@Component({
  selector: 'app-moviereviewcontent',
  templateUrl: './moviereviewcontent.component.html',
  styleUrls: ['./moviereviewcontent.component.css']
})
export class MoviereviewcontentComponent implements OnInit {

  constructor(private route:ActivatedRoute,private movieService:MoviesService) { }
  superusermovieReviewContent:SuperUserReviews;
  ngOnInit() {
    let id=parseInt(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.movieService.getSuperUserMovieReviewContent(id).subscribe((data)=>
  {
    this.superusermovieReviewContent=data;
    console.log(this.superusermovieReviewContent);
  })
  }

}
