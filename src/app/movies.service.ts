import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {ThisWeeksMovie} from '../app/thisweeksmovie.model';
import {UpComingMovie} from '../app/upcomingmovies.model'
import {Comment} from '../app/comment.model';
import {Usersthisweeksmoviecomments} from '../app/moviescontent/usersthisweeksmoviecomments.model';
import { MoviesGrade} from '../app/moviescontent/moviesgrade.model';
import { ListFilms } from './listfilms.model';
import { Categories } from './categories.model';
import { Actors } from './actors.model';
import { Categoriesmoviepercent } from './adminpanel/categoriesmoviepercent';
import { MovieReview } from './moviereview/moviereview.model';
import { SuperUserReviews } from './moviereview/superuserreview.model';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }

  getThisWeeksMovie()
  {
    return this.http.get<ThisWeeksMovie[]>("http://localhost:52870/api/GetBuHaftakiFilmlerAnasayfa")
  }
  getUpcomingMovies()
  {

    return this.http.get<UpComingMovie[]>("http://localhost:52870/api/GetGelecekHaftakiFilmlerAnasayfa")
  }
  getListFilms()
  {
    return this.http.get<ListFilms[]>("http://localhost:52870/api/GetListeliFilmlerAnasayfa")
  }
  getCategoriesName()
  {

    return this.http.get<Categories[]>("http://localhost:52870/api/GetKategorilerAnasayfa")
  }
  getThisWeeksMovieContent(id:Number)
  {
    return this.http.get<ThisWeeksMovie>("http://localhost:52870/api/GetBuHaftakiFilmler/"+id)
  }
  getUpComingMovieContent(id:Number)
  {
    return this.http.get<UpComingMovie>("http://localhost:52870/api/GetGelecekHaftakiFilmler/"+id)
  }
  getListFilmsContent(id:Number)
  {
    return this.http.get<UpComingMovie>("http://localhost:52870/api/GetListeliFilmler/"+id)
  }
  getListCategoriesContent(id:Number)
  {
    return this.http.get<ListFilms[]>("http://localhost:52870/api/GetKategoriFilmleriGetir/"+id)
  }
  getFilmsGrade(filmid:string)
  {
    return this.http.get<string>("http://localhost:52870/api/getFilmNotu/"+filmid)
  }
  postCommentUser(commentmodel:Comment,filmid:number)
    {

      let Options = {
        headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
       };
       var object={'yorumlar':commentmodel,'filmid':filmid};
      return this.http.post("http://localhost:52870/api/PostYorumYap",object,Options);
    }
    postCommentListFilmsUser(commentmodel:Comment,filmid:number)
    {

      let Options = {
        headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
       };
       var object={'yorumlar':commentmodel,'filmid':filmid};
      return this.http.post("http://localhost:52870/api/PostListeliFilmYorumuYap",object,Options);
    }
    getCommentUser(filmid:number)
    {
      return this.http.get<Usersthisweeksmoviecomments[]>("http://localhost:52870/api/GetFilmYorumlariGetir/"+filmid);
    }
    getListFilmsCommentUser(filmid:number)
    {
      return this.http.get<Usersthisweeksmoviecomments[]>("http://localhost:52870/api/GetListFilmYorumlariGetir/"+filmid);
    }
    getListFilmsActors(filmid:number)
    {
      return this.http.get<String[]>("http://localhost:52870/api/GetListeliFilmOyunculari/"+filmid);

    }
    getFilmsActors(oyuncuadi:string)
    {

      return this.http.get<Actors>("http://localhost:52870/api/GetListeliFilmOyuncusu/"+oyuncuadi);
    }
    getActorFilms(oyuncuadi:string)
    {

      return this.http.get<ListFilms[]>("http://localhost:52870/api/GetOyuncuFilmleriGetir/"+oyuncuadi);
    }
    postFilmgrade(buhaftafilmlerikullanicinotu:MoviesGrade)
    {

      let Options = {
        headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
       };
      
      return this.http.post("http://localhost:52870/api/PostFilmNot",JSON.stringify(buhaftafilmlerikullanicinotu),Options);
    }

    getAdminMovieData()
    {
      debugger
      var data='Bearer '+localStorage.getItem("access_token");
      let Options = {
        headers: new HttpHeaders({
       'Content-Type': 'application/json',
       'Authorization':data
     })
       };
     return this.http.get<ThisWeeksMovie[]>("http://localhost:52870/api/BuHaftakiFilmler",Options);
    }
    postAdminAddMovieData(thisweeksmovie:ThisWeeksMovie)
    {
      var data='Bearer '+localStorage.getItem("access_token");
      let Options = {
        headers: new HttpHeaders({
       'Content-Type': 'application/json',
       'Authorization':data
     })
       };
      var body=JSON.stringify(thisweeksmovie);
      return this.http.post("http://localhost:52870/api/BuHaftakiFilmler",body,Options)
    }
    deleteAdminDataMovie(movieid:string)
    {
      debugger
      var data='Bearer '+localStorage.getItem("access_token");
      let Options = {
        headers: new HttpHeaders({
       'Content-Type': 'application/json',
       'Authorization':data
     })
       };
      return this.http.delete("http://localhost:52870/api/BuHaftakiFilmler/"+movieid,Options);
    }
    deleteAdminDataListMovie(movieid:string)
    {
      debugger
      var data='Bearer '+localStorage.getItem("access_token");
      let Options = {
        headers: new HttpHeaders({
       'Content-Type': 'application/json',
       'Authorization':data
     })
       };
      return this.http.delete("http://localhost:52870/api/DeleteFilmKategori/"+movieid,Options);
    }
    getAdminUpdateDataMovie(movieid:string)
    {
      debugger
      var data='Bearer '+localStorage.getItem("access_token");
      let Options = {
        headers: new HttpHeaders({
       'Content-Type': 'application/json',
       'Authorization':data
     })
       };
     return this.http.get<ThisWeeksMovie>("http://localhost:52870/api/BuHaftakiFilmler/"+movieid,Options);
    }
    getAdminUpdateDataListMovie(movieid:string)
    {
      debugger
      var data='Bearer '+localStorage.getItem("access_token");
      let Options = {
        headers: new HttpHeaders({
       'Content-Type': 'application/json',
       'Authorization':data
     })
       };
     return this.http.get<ListFilms>("http://localhost:52870/api/ListeliFilmlers/"+movieid,Options);
    }
    putAdminUpdateDataMovie(thisweeksmovie:ThisWeeksMovie)
    {
      debugger
      var data='Bearer '+localStorage.getItem("access_token");
      var body=JSON.stringify(thisweeksmovie);
      let Options = {
        headers: new HttpHeaders({
       'Content-Type': 'application/json',
       'Authorization':data
     })
       };
   
     return this.http.put("http://localhost:52870/api/BuHaftakiFilmler/"+thisweeksmovie.filmid,body,Options);
    }
    putAdminUpdateDataListMovie(listfilms:ListFilms)
    {
      debugger
      var data='Bearer '+localStorage.getItem("access_token");
      var body=JSON.stringify(listfilms);
      let Options = {
        headers: new HttpHeaders({
       'Content-Type': 'application/json',
       'Authorization':data
     })
       };
   
     return this.http.put("http://localhost:52870/api/ListeliFilmlers/"+listfilms.filmid,body,Options);
    }
    postAdminAddListMovieData(listmoviedata:ListFilms,categoriesid:number)
    {
      debugger
      var data='Bearer '+localStorage.getItem("access_token");
      let Options = {
        headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
       };
       var object={'listelifilm':listmoviedata,'kategoriid':categoriesid};
      return this.http.post("http://localhost:52870/api/PostFilmKategoriKayıt",object,Options);
      
    }
    getCategoriesMoviePercentData()
    {
      return this.http.get<Categoriesmoviepercent[]>("http://localhost:52870/api/GetKategorilereGöreFilmSayiYuzdeleri");
    }
    getAdminCategoriesData()
    {
      debugger
      var data='Bearer '+localStorage.getItem("access_token");
      let Options = {
        headers: new HttpHeaders({
       'Content-Type': 'application/json',
       'Authorization':data
     })
       };
      return this.http.get<Categories[]>("http://localhost:52870/api/Kategorilers",Options);
    }
    getAdminListFilmsData()
    {
      debugger
      var data='Bearer '+localStorage.getItem("access_token");
      let Options = {
        headers: new HttpHeaders({
       'Content-Type': 'application/json',
       'Authorization':data
     })
       };
      return this.http.get<ListFilms[]>("http://localhost:52870/api/ListeliFilmlers",Options);
    }
    postAdminSuperUserMovieReview(movieReview:MovieReview)
    {
      debugger
      var data='Bearer '+localStorage.getItem("access_token");
      let Options = {
        headers: new HttpHeaders({
       'Content-Type': 'application/json',
       'Authorization':data
     })
       };
       var object=JSON.stringify(movieReview);
      return this.http.post("http://localhost:52870/api/PostMovieReview",object,Options);
    }
    getSuperUserListMovieReviewsData(id:string)
    {
      debugger
      var data='Bearer '+localStorage.getItem("access_token");
      let Options = {
        headers: new HttpHeaders({
       'Content-Type': 'application/json',
       'Authorization':data
     })
       };
      return this.http.get<SuperUserReviews[]>("http://localhost:52870/api/GetFilmElestirim/"+id,Options);
    }
    postSuperUserListData(superUserMovieReviews:SuperUserReviews)
    {
      debugger
      var data='Bearer '+localStorage.getItem("access_token");
      let Options = {
        headers: new HttpHeaders({
       'Content-Type': 'application/json',
       'Authorization':data
     })
       };
       var object=JSON.stringify(superUserMovieReviews);
      return this.http.post<MovieReview>("http://localhost:52870/api/PostElestiriVerileriGetir",object,Options);
    }
    postSuperUserUpdateMovieReviewData(movieReview:MovieReview)
    {
      debugger
      var data='Bearer '+localStorage.getItem("access_token");
      let Options = {
        headers: new HttpHeaders({
       'Content-Type': 'application/json',
       'Authorization':data
     })
       };
       var object=JSON.stringify(movieReview);
      return this.http.post<MovieReview>("http://localhost:52870/api/PostElestiriVerileriGuncelle",object,Options);
    }
    getSuperUserMovieReview()
    {
      return this.http.get<SuperUserReviews[]>("http://localhost:52870/api/GetSuperUserFilmElestirileri");
    }
    getSuperUserMovieReviewContent(id:number)
    {
      return this.http.get<SuperUserReviews>("http://localhost:52870/api/GetSuperUserFilmElestiriIcerik/"+id);
    }
    getListMovieData(pageNumber:number,pageCount:number)
    {
      return this.http.get<ListFilms[]>("http://localhost:52870/api/GetListeliFilmKayitlari/"+pageNumber+"/"+pageCount);
    }
    getListMovieCount()
    {
      return this.http.get<number>("http://localhost:52870/api/GetListeliFilmlerinSayisi");
    }

}
