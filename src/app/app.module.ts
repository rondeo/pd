import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }   from '@angular/common/http';

import { Routes, RouterModule, PreloadAllModules} from '@angular/router';

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

// определение маршрутов
const appRoutes: Routes =[
  { path: '', component: HomeComponent},
  { path: 'full_news/:id', component: FullNewsComponent},
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
    PeoplesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
