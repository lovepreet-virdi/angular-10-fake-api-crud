import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit, OnDestroy {
  public posts = [];
  selectedRow = null;
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(public ds: DataService, public router: Router) { }

  ngOnInit(): void {
    this.ds.getPosts().pipe(takeUntil(
      this.destroy$
    )).subscribe(data => {
      this.posts = data;

    });
  }
  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
  handleSeeDetials(i: number): void {

    this.selectedRow = this.posts[i];
  }
  handleEdit(event: Event, postId: number): void {

    event.preventDefault();
    this.router.navigate(['post', postId])

  }
}
