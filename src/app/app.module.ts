import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { ToastrModule} from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { MoviescontentComponent } from './moviescontent/moviescontent.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { UsersService } from './users.service';
import { MoviesService } from './movies.service';
import { LogoutComponent } from './logout/logout.component';
import { UpcomingmoviescontentComponent } from './upcomingmoviescontent/upcomingmoviescontent.component';
import { FilmsComponent } from './films/films.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilmscontentComponent } from './filmscontent/filmscontent.component';
import { CategoriescontentComponent } from './categoriescontent/categoriescontent.component';
import { NewscontentComponent } from './newscontent/newscontent.component';
import { SlidercontentComponent } from './slidercontent/slidercontent.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ActorscontentComponent } from './actorscontent/actorscontent.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { ForbiddenComponent } from './adminpanel/forbidden/forbidden.component';
import {AuthGuard} from './adminpanel/auth/auth.guard';
import { TopNavbarComponent } from './adminpanel/top-navbar/top-navbar.component';
import { LeftNavbarComponent } from './adminpanel/left-navbar/left-navbar.component';
import { UsersAdminComponent } from './adminpanel/users-admin/users-admin.component';
import { ThisweeksmovieAdminComponent } from './adminpanel/thisweeksmovie-admin/thisweeksmovie-admin.component';
import { ListfilmsAdminComponent } from './adminpanel/listfilms-admin/listfilms-admin.component';
import { MoviereviewComponent } from './moviereview/moviereview.component';
import { MyMovieReviewsComponent } from './my-movie-reviews/my-movie-reviews.component';
import { NewscontentitemComponent } from './newscontentitem/newscontentitem.component';
import { MoviereviewcontentComponent } from './moviereviewcontent/moviereviewcontent.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    MoviescontentComponent,
    LoginComponent,
    LogoutComponent,
    UpcomingmoviescontentComponent,
    FilmsComponent,
    FilmscontentComponent,
    CategoriescontentComponent,
    NewscontentComponent,
    SlidercontentComponent,
    ActorscontentComponent,
    AdminpanelComponent,
    ForbiddenComponent,
    TopNavbarComponent,
    LeftNavbarComponent,
    UsersAdminComponent,
    ThisweeksmovieAdminComponent,
    ListfilmsAdminComponent,
    MoviereviewComponent,
    MyMovieReviewsComponent,
    NewscontentitemComponent,
    MoviereviewcontentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {
        path:'',
        component:HomeComponent

      },
      {
        path:'register',
        component:RegisterComponent

      },
      {
        path:'slidercontent',
        component:SlidercontentComponent

      },
      {
        path:'filmsactors/:oyuncuadi',
        component:ActorscontentComponent

      },
      {
        path:'moviescontent/:id',
        component:MoviescontentComponent

      },
      {
        path:'upcomingmoviescontent/:id',
        component:UpcomingmoviescontentComponent

      },
      {
        path:'films/listfilmscontent/:filmid',
        component:FilmscontentComponent

      },
      {
        path:'categoriescontent/:id',
        component:CategoriescontentComponent

      },
      {
        path:'login',
        component:LoginComponent

      },
      {
        path:'films',
        component:FilmsComponent

      },
      {
        path:'footer',
        component:FooterComponent

      },
      {
        path:'slidercontent/:id',
        component:SlidercontentComponent
      },
      {
        path:'newscontent',
        component:NewscontentComponent

      },
      {
        path:'newscontent/newscontentitem/:id',
        component:NewscontentitemComponent

      },
      {
        path:'moviereviewcontent/:id',
        component:MoviereviewcontentComponent

      },
      {
        path:'adminpanel',
        component:AdminpanelComponent,
        canActivate:[AuthGuard],
        data : { roles : ['Admin']}
      },
      {
        path:'moviereview',
        component:MoviereviewComponent,
        canActivate:[AuthGuard],
        data : { roles : ['Admin','SuperUser']}
      },
      
      {
        path:'usersAdmin',
        component:UsersAdminComponent,
        canActivate:[AuthGuard],
        data : { roles : ['Admin']}
       

      },
      {
        path:'thisweekmovieAdmin',
        component:ThisweeksmovieAdminComponent,
        canActivate:[AuthGuard],
        data : { roles : ['Admin']}
       

      },
      {
        path:'listfilmsAdmin',
        component:ListfilmsAdminComponent,
        canActivate:[AuthGuard],
        data : { roles : ['Admin']}
       

      },
      {
        path:'myMovieReviews',
        component:MyMovieReviewsComponent,
        canActivate:[AuthGuard],
        data : { roles : ['Admin','SuperUser']}
       

      },
      {
        path:'forbidden',
        component:ForbiddenComponent,
        canActivate:[AuthGuard],
      },
      {
        path:'logout',
        component:LogoutComponent
      },
    ])
  ],
  providers: [UsersService,MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
