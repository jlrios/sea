import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { WelcomeComponent } from './components/home/welcome/welcome.component';
import { RegisterComponent } from './components/home/register/register.component';
import { LoginComponent } from './components/home/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChangePasswordComponent } from './components/dashboard/change-password/change-password.component';
import { NavbarComponent } from './components/dashboard/navbar/navbar.component';
import { QuestionnairesComponent } from './components/dashboard/questionnaires/questionnaires.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoadingComponent } from './shared/loading/loading.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AddTokenInterceptor } from '../app/helpers/add-token.interceptor';
import { NewQuestionnaireComponent } from './components/dashboard/questionnaires/new-questionnaire/new-questionnaire.component';
import { StepOneComponent } from './components/dashboard/questionnaires/new-questionnaire/step-one/step-one.component';
import { StepTwoComponent } from './components/dashboard/questionnaires/new-questionnaire/step-two/step-two.component';
import { NewQuestionComponent } from './components/dashboard/questionnaires/new-questionnaire/step-two/new-question/new-question.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WelcomeComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    ChangePasswordComponent,
    NavbarComponent,
    QuestionnairesComponent,
    LoadingComponent,
    NewQuestionnaireComponent,
    StepOneComponent,
    StepTwoComponent,
    NewQuestionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule
  ],
  providers: [provideClientHydration(), { provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
