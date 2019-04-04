import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedPageComponent } from './feed-page/feed-page.component';
import { UserViewComponent } from './user-view/user-view.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {
    path:':query',
    component: FeedPageComponent
  },
  {
    path:'user/:uname',
    component: UserViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
