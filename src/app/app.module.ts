import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MissedpostsComponent } from './components/post/missedposts/missedposts.component';
import { LatestpostsComponent } from './components/post/latestposts/latestposts.component';
import { PostsComponent } from './components/post/posts/posts.component';
import { PostComponent } from './components/post/post/post.component';
import { CategoryComponent } from './components/category/category.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { SocialComponent } from './components/social/social.component';
import { MenueComponent } from './components/menue/menue.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SearchComponent } from './components/search/search.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    SidebarComponent,
    MissedpostsComponent,
    LatestpostsComponent,
    PostsComponent,
    PostComponent,
    CategoryComponent,
    ArchiveComponent,
    SocialComponent,
    MenueComponent,
    NavigationComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
