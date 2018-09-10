import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../movies.service';
import { ListFilms } from '../../listfilms.model';
import { NgForm } from '@angular/forms';
import { Categories } from '../../categories.model';

@Component({
  selector: 'app-listfilms-admin',
  templateUrl: './listfilms-admin.component.html',
  styleUrls: ['./listfilms-admin.component.css']
})
export class ListfilmsAdminComponent implements OnInit {

  constructor(private movieService: MoviesService) { }
  listfilms: ListFilms[];
  listfilmmodel = new ListFilms();
  categoriesData=new Categories();
  listfilmUpdateData=new ListFilms();
  ngOnInit() {
    this.movieService.getAdminListFilmsData().subscribe((data) => {
      this.listfilms = data;
     console.log(this.listfilms);
    })
 
  }
  postAdminAddListMovie()
  {
    console.log(this.listfilmmodel);
    console.log(this.categoriesData.kategoriid);
    this.movieService.postAdminAddListMovieData(this.listfilmmodel,this.categoriesData.kategoriid).subscribe((data)=>{
      
      console.log(data);
      this.movieService.getAdminListFilmsData().subscribe((data) => {
        this.listfilms = data;
       console.log(this.listfilms);
      })
      
    });
  }
  deleteAdminListMovie(movieid:string)
  {
    debugger;
    console.log(movieid);
    this.movieService.deleteAdminDataListMovie(movieid).subscribe((data)=>{
      debugger;
      console.log(data);
      this.movieService.getAdminListFilmsData().subscribe((data) => {
        this.listfilms = data;
      })
      alert(data);
    });
  }
  getAdminUpdateListMovie(movieid:string)
  {
    
    console.log(movieid);
    this.movieService.getAdminUpdateDataListMovie(movieid).subscribe((data) => {
      this.listfilmUpdateData=data;
     console.log(data);
    });
  }
  putUpdateAdminListMovie()
  {
    console.log(this.listfilmUpdateData);
    this.movieService.putAdminUpdateDataListMovie(this.listfilmUpdateData).subscribe((data)=>{
      alert('Güncelleme tamamlandi.');
      window.location.reload();
    })
  }

}
