import { Component, OnInit } from '@angular/core';
import { ListFilms } from '../listfilms.model';
import {MoviesService} from '../movies.service';
import {NgxPaginationModule} from 'ngx-pagination';
@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  constructor(private movieService:MoviesService) { }
  listfilms:ListFilms[];
  page = 1;
  pageCount = 6;
  movieCount:number;
  ngOnInit() 
  {
    this.getFilms();
    this.movieService.getListMovieCount().subscribe((data)=>{
  
      this.movieCount=data;
      console.log("moviecount",data);
    })
  }
  getFilms(){
    this.movieService.getListMovieData(this.page,this.pageCount).subscribe((data)=>{
     
      this.listfilms=data;
    });
  }

  onPageChange(e){
    this.getFilms();

  }
}
