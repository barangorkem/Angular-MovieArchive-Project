import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Categoriesmoviepercent } from './categoriesmoviepercent';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {

  constructor(private movieService:MoviesService) { }
  categoriesmoviepercentData:Categoriesmoviepercent[];
  ngOnInit() {
    this.movieService.getCategoriesMoviePercentData().subscribe((data)=>{
      this.categoriesmoviepercentData=data;
      console.log(data);
    })
  }

}
