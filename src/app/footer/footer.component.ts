import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { ListFilms } from '../listfilms.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private movieService:MoviesService) { }
  listfilms:ListFilms[];
  movieCount:number;
  page = 1;
  pageCount = 6;
  pageModel;
 
  ngOnInit() {
   this.getFilms();
    this.movieService.getListMovieCount().subscribe((data)=>{
  
      this.movieCount=data;
      console.log("moviecount",data);
    })
  }
 
  pageNumber()
  {
    console.log(this.page);
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
