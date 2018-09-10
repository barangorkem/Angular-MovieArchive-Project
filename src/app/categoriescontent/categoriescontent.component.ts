import { Component, OnInit } from '@angular/core';
import { MoviesService} from '../movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ListFilms } from '../listfilms.model'
import { Categories } from '../categories.model';
@Component({
  selector: 'app-categoriescontent',
  templateUrl: './categoriescontent.component.html',
  styleUrls: ['./categoriescontent.component.css']
})
export class CategoriescontentComponent implements OnInit {

  constructor(private route:ActivatedRoute,private movieservice:MoviesService,private router:Router) { }
  listfilms:ListFilms[];
  ngOnInit() 
  {
    let id=parseInt(this.route.snapshot.paramMap.get('id'));
    this.movieservice.getListCategoriesContent(id).subscribe(data=>{this.listfilms=data;console.log(this.listfilms);});
  }
  navigateFilmsContent(kategoriid:number)
  {
   
    this.router.navigate(['films/listfilmscontent',kategoriid]);
  }
}
