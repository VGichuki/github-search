import { Component, OnInit } from '@angular/core';
import { SearchGithubService } from '../search-github.service';
import { User } from '../user'
import { Repo } from '../repo'

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  user!: User; 
  repoDetails = [];
  searchGithubService: SearchGithubService;

  constructor(searchGithubService: SearchGithubService) { 
    this.searchGithubService = searchGithubService
  }

  ngOnInit() {
    this.user = this.searchGithubService.user
    this.repoDetails = this.searchGithubService.repoData
    console.log(this.repoDetails)
  }

}
