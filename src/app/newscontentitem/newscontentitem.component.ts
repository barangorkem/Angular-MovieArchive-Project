import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { NewsService } from '../news.service';
import { News } from '../news.model';
import { MoviesService } from '../movies.service';
import { ThisWeeksMovie } from '../thisweeksmovie.model';
@Component({
  selector: 'app-newscontentitem',
  templateUrl: './newscontentitem.component.html',
  styleUrls: ['./newscontentitem.component.css']
})
export class NewscontentitemComponent implements OnInit {

  constructor(private route:ActivatedRoute,private newsService:NewsService,private moviesService:MoviesService,private router:Router) { }

  newsDataItem:News;
  newsData:News[];
  thisweeksmovie:ThisWeeksMovie[];
  ngOnInit() {
    let id=parseInt(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.newsService.getNewsDataItem(id).subscribe((data)=>{
      this.newsDataItem=data;
    },error=>{
      console.log(error);
    })
    this.newsService.getNewsData().subscribe(data=>{
      this.newsData=data;
      console.log(this.newsData);
    })
    this.moviesService.getThisWeeksMovie().subscribe(data=>{this.thisweeksmovie=data;});

  }
  thisweeksmovieNavigate(id:number)
  {
    debugger
    this.router.navigate(['moviescontent',id]);
  }
  newsDataItemNavigate(id:string)
  {
    this.router.navigate(['newscontent/newscontentitem',id]);
    window.location.reload();
  }

}
