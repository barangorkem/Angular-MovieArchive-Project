import { Component, OnInit } from '@angular/core';
import { ThisWeeksMovie } from '../../thisweeksmovie.model';
import { MoviesService } from '../../movies.service';
import { NgForm } from '@angular/forms';
import { Categories } from '../../categories.model';

@Component({
  selector: 'app-thisweeksmovie-admin',
  templateUrl: './thisweeksmovie-admin.component.html',
  styleUrls: ['./thisweeksmovie-admin.component.css']
})
export class ThisweeksmovieAdminComponent implements OnInit {

  constructor(private movieService: MoviesService) { }
  thisweeksmovie: ThisWeeksMovie[];
  thisweeksmoviemodel = new ThisWeeksMovie();
  thisweeksmovieUpdateData=new ThisWeeksMovie();
  ngOnInit() {
    this.movieService.getAdminMovieData().subscribe((data) => {
      this.thisweeksmovie = data;
     
    })
   
  }
  resetForm(form?:NgForm)
  {
    if(form!=null)
    form.reset()
    this.thisweeksmoviemodel={
      filmid:null,
      filmadi :'',
      filmicerik : '',
      filmresim : '',
      genel_not:null
    }
  }
  postAdminAddMovie(f:NgForm) {
    this.movieService.postAdminAddMovieData(this.thisweeksmoviemodel).subscribe((data) => {
      alert("Kayit yapildi.");
      this.movieService.getAdminMovieData().subscribe((data) => {
        this.thisweeksmovie = data;
        
        this.resetForm(f);
       
        
      })
    })
    
  }
  deleteAdminMovie(movieid: string) {
   
    this.movieService.deleteAdminDataMovie(movieid).subscribe((data) => {
      alert("Silme işlemi başarılıdır.");
      this.movieService.getAdminMovieData().subscribe((data) => {
        this.thisweeksmovie = data;
       
      })
    });
  }
  getAdminUpdateMovie(movieid:string)
  {
    
    this.movieService.getAdminUpdateDataMovie(movieid).subscribe((data) => {
      this.thisweeksmovieUpdateData=data;
     
    });
  }
  putUpdateAdminMovieData()
  {
    
    this.movieService.putAdminUpdateDataMovie(this.thisweeksmovieUpdateData).subscribe((data)=>{
      alert('Güncelleme tamamlandi.');
      window.location.reload();
    })
  }
  
}
