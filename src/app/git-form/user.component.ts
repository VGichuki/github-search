import { Component, OnInit } from '@angular/core';
import { SearchGithubService } from '../search-github.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  username!: string;
  searchGithubService: SearchGithubService;

  submitUserName(){
    this.searchGithubService.getUserData(this.username)
  }



  constructor(searchGithubService: SearchGithubService) { 
    this.searchGithubService = searchGithubService
  }

  ngOnInit(): void {
  }

}
