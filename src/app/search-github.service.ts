import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from './user'
import { Repo } from './repo'

@Injectable({
  providedIn: 'root'
})
export class SearchGithubService {

  user: User | undefined;
  repo: Repo | undefined;
  repoData = [];
  
  constructor(private http: HttpClient) { 
    this.user = new User("",0,"","",new Date)
  }
}
