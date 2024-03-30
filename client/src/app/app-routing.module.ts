import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/home/welcome/welcome.component';
import { RegisterComponent } from './components/home/register/register.component';
import { LoginComponent } from './components/home/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { QuestionnairesComponent } from './components/dashboard/questionnaires/questionnaires.component';
import { ChangePasswordComponent } from './components/dashboard/change-password/change-password.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, children: [
    { path: '', component: WelcomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },  
  ]},
  { path: 'dashboard', component: DashboardComponent, children: [
    { path: '', component: QuestionnairesComponent },
    { path: 'changePassword', component: ChangePasswordComponent }
  ]},
  { path: '**', redirectTo: '/welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
