import { Component, OnInit } from '@angular/core';
import { News } from '../news.model';
import { NewsService } from '../news.service';
import { ThisWeeksMovie} from '../thisweeksmovie.model';
import { MoviesService } from '../movies.service';
import { Router } from '@angular/router';
import { UpComingMovie } from '../upcomingmovies.model';
@Component({
  selector: 'app-newscontent',
  templateUrl: './newscontent.component.html',
  styleUrls: ['./newscontent.component.css']
})
export class NewscontentComponent implements OnInit {

  newsBanner:News;
  newsList:News[];
  thisweeksmovie:ThisWeeksMovie[];
  upcomingmovie:UpComingMovie[];
  constructor(private newsService:NewsService,private moviesService:MoviesService,private router:Router) { }

  ngOnInit() 
  {
    debugger;
    this.newsService.getNewsData().subscribe(data=>{
      this.newsList=data;
      this.newsBanner=this.newsList.find(x=>x.habermanset==true);
      this.newsList=this.newsList.filter(x=>x.habermanset==false);
      this.moviesService.getThisWeeksMovie().subscribe(data=>{this.thisweeksmovie=data;});
      this.moviesService.getUpcomingMovies().subscribe(data=>{this.upcomingmovie=data;});

    })
  }
  thisweeksmovieNavigate(id:number)
  {
    debugger
    this.router.navigate(['moviescontent',id]);
  }
  upcomingmovieNavigate(id:number)
  {
    debugger
    this.router.navigate(['upcomingmoviescontent',id]);
  }

}
