import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from './user'
import { Repo } from './repo'

@Injectable({
  providedIn: 'root'
})
export class SearchGithubService {

  user : User;
  repo : Repo;
  repoData: any = []
  newUserData: any = []
  
  constructor(private http:HttpClient) {
    this.user = new User("","","","",new Date)
    this.repo = new Repo("","",new Date,"","")
   }

   getUserData(username:string){
     interface ApiResponse {
       bio: string,
       public_repos: string,
       login: string,
       avatar_url: string,
       created_at: Date
     }

     let promise: any = new Promise<void>((resolve,reject)=>{
       this.http.get<ApiResponse>("https://api.github.com/users/" + username).toPromise().then(response=>{
        this.user.bio = response.bio;
        this.user.public_repos = response.public_repos
        this.user.login = response.login;
        this.user.avatar_url = response.avatar_url;
        this.user.created_at = response.created_at;

        resolve()
      },
      error=>{
        reject(error)
   })
   this.http.get<any>("https://api.github.com/users/" + username + "/repos").toPromise().then(response=>{
    for(let i=0; i<response.length; i++){

      this.newUserData = new Repo(response(i).name, response(i).description, response(i).updates_at, response(i).clone_url, response(i).language)
      this.repoData.push(this.newUserData);


      resolve()
    }
     (    error: any)=>{
      reject(error)
    }
 })
    return promise


   }
   
     )
}
   }
  
