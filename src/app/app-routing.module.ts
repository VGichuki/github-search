import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { UserComponent } from './git-form/user.component';
import { RepoComponent } from './git-results/repo.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  
  {path: 'home', component: HomeComponent },
  {path: 'contact', component: ContactComponent},
  {path: 'gitForm', component: UserComponent},
  {path: 'gitResults', component: RepoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
