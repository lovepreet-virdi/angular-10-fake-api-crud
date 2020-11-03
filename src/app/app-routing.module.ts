import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { AddScreenCanDeactivateGuard } from './addScreenCanDecativate.guard';
import { PostsListComponent } from './posts-list/posts-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: 'posts', component: PostsListComponent },
  { path: 'addPost', component: AddPostComponent, canDeactivate: [AddScreenCanDeactivateGuard] },
  { path: 'post/:id', component: AddPostComponent, canDeactivate: [AddScreenCanDeactivateGuard] },
  {
    path: 'employees', loadChildren: './employees/employees.module#EmployeesModule'
  },
  { path: '**', redirectTo: 'posts' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
