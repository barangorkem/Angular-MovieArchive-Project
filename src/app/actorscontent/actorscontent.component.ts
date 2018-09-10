import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Actors } from '../actors.model';
import { MoviesService } from '../movies.service';
import { ListFilms } from '../listfilms.model';

@Component({
  selector: 'app-actorscontent',
  templateUrl: './actorscontent.component.html',
  styleUrls: ['./actorscontent.component.css']
})
export class ActorscontentComponent implements OnInit {

  actors:Actors;
  movies_he_plays:ListFilms[];  
  constructor(private route:ActivatedRoute,private movieService:MoviesService,private router:Router) { }

  ngOnInit() 
  {
    let oyuncuadi=this.route.snapshot.paramMap.get('oyuncuadi');
    this.movieService.getFilmsActors(oyuncuadi).subscribe(data=>{this.actors=data;});
    this.movieService.getActorFilms(oyuncuadi).subscribe(data=>{this.movies_he_plays=data;})
  }
  navigateFilmsContent(filmid:number)
  {
    this.router.navigate(['films/listfilmscontent',filmid]);
    console.log(filmid);
  }
}
