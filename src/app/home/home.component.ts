import { Component, OnInit } from '@angular/core';
import { ThisWeeksMovie } from '../thisweeksmovie.model';
import { MoviesService } from '../movies.service';
import { UpComingMovie } from './upcomingmovies.model';
import { Categories } from '../categories.model';
import { SliderService } from '../slider.service';
import { Slider } from '../slider.model';
import { NewsService } from '../news.service';
import { News } from '../news.model';
import { SuperUserReviews } from '../moviereview/superuserreview.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private movieService:MoviesService,private sliderService:SliderService,private newsService:NewsService ) 
  {

   }
  thisweeksmovie:ThisWeeksMovie[];
  upcomingmovie:UpComingMovie[];
  categoriesdata:Categories[];
  sliderData:Slider[];
  sliderActiveData:Slider;
  newsData:News[];
  superuserMovieReviews:SuperUserReviews[];
  ngOnInit() 
  {
    debugger
    this.movieService.getThisWeeksMovie().subscribe(data=>this.thisweeksmovie=data);
    this.movieService.getUpcomingMovies().subscribe(data=>this.upcomingmovie=data);
    this.sliderService.getSliderData().subscribe((data)=>{
      this.sliderData=data;
      this.sliderActiveData=this.sliderData.find(x=>x.active==true);
      this.sliderData=this.sliderData.filter(x=>x.active==false);
    });
    this.movieService.getCategoriesName().subscribe(data=>this.categoriesdata=data);
  
    this.newsService.getNewsData().subscribe((data)=>
    {
      this.newsData=data;
    })
    this.movieService.getSuperUserMovieReview().subscribe((data)=>{
      this.superuserMovieReviews=data;
      console.log(this.superuserMovieReviews);
    })
  }
 

}
