import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { AddPostComponent } from './add-post/add-post.component';
import { FooterComponent } from './footer/footer.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ChildCompComponent } from './child-comp/child-comp.component';
import { AddScreenCanDeactivateGuard } from './addScreenCanDecativate.guard';
import { TitleFilterPipe } from './cutomHello.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftSidebarComponent,
    PostsListComponent,
    AddPostComponent,
    FooterComponent,
    ChildCompComponent,
    TitleFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [DataService, AddScreenCanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
