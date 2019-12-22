import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { OverviewComponent } from './components/overview/overview.component';

const routes: Routes = [
  {
    path: 'signin', component: SignInComponent
  },
  {
    path: '', component: OverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
