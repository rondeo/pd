import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }   from '@angular/common/http';

import { Routes, RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { GuestBookComponent } from './guest-book/guest-book.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ClubComponent } from './club/club.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FormsModule }   from '@angular/forms';
import { BoatsComponent } from './boats/boats.component';
import { FullNewsComponent } from './full-news/full-news.component';
import { PeoplesComponent } from './peoples/peoples.component';
import { FullAlbumComponent } from './full-album/full-album.component';
import { BoatsTitleComponent } from './boats-title/boats-title.component';
import { BoatsDescComponent } from './boats-desc/boats-desc.component';
import { ScrollingDirective } from './scrolling.directive';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
// определение маршрутов
const appRoutes: Routes =[
  { path: '', component: HomeComponent},
  { path: 'full_news/:id', component: FullNewsComponent},
  { path: 'full_album/:id', component: FullAlbumComponent},
  { path: 'boats_desc/:id', component: BoatsDescComponent},
  { path: 'peoples', component: PeoplesComponent},
  { path: 'news', component: NewsComponent},
  { path: 'guestbook', component: GuestBookComponent},
  { path: 'boats',component:BoatsComponent},
  { path: 'club', component: ClubComponent},
  { path: 'contacts', component: ContactsComponent},
  { path: 'gallery', component: GalleryComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NewsComponent,
    GuestBookComponent,
    HomeComponent,
    NotFoundComponent,
    ContactsComponent,
    ClubComponent,
    GalleryComponent,
    BoatsComponent,
    FullNewsComponent,
    PeoplesComponent,
    FullAlbumComponent,
    BoatsTitleComponent,
    BoatsDescComponent,
    ScrollingDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule,
    ModalModule.forRoot(),
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
