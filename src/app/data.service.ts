import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  getPostsUrl = "https://jsonplaceholder.typicode.com/posts";
  createPostURl = "https://jsonplaceholder.typicode.com/posts";
  constructor(public http: HttpClient) { }
  getPosts(): Observable<any> {
    return this.http.get(this.getPostsUrl);
  }
  getPostById(postId: number): Observable<any> {
    return this.http.get(`${this.getPostsUrl}/${postId}`);
  }
  createPost(postData): Observable<any> {
    return this.http.post(this.createPostURl, postData);
  }
  updatePost(postData): Observable<any> {
    return this.http.put(`${this.getPostsUrl}/${postData.id}`, postData);
  }
}
