import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class EmployeeDataService {


  getPostsUrl = "https://jsonplaceholder.typicode.com/users";
  createPostURl = "https://jsonplaceholder.typicode.com/users";
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

