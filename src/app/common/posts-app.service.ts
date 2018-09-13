import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, Address, Company, Geo, Post, Comment } from './data-model';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsAppService {

  private USERS: string = environment.jsonService + '/users/';
  private POSTS: string = environment.jsonService + '/posts/';
  private COMMENTS: string = environment.jsonService + '/comments/';

  constructor(private http:HttpClient) { }

  searchUserByEmail(email:string): Observable<User>{
    let url = this.USERS + '/?email=' + email;
    return this.http.get<User>(url);
  }

  searchPostsByUserId(id:number): Observable<Post[]>{
    let url = this.POSTS + '/?id=' + id;
    return this.http.get<Post[]>(url);
  }

  searchCommentsByPostId(id:number): Observable<Comment[]>{
    let url = this.COMMENTS + '/?id=' + id;
    return this.http.get<Comment[]>(url);
  }
}