import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { NgModule } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import{MatFormFieldModule}from '@angular/material/form-field';

import{MatSelectModule}from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdmindashbordComponent } from './component/admin/admindashbord/admindashbord.component';
import { UserdashbordComponent } from './component/user/userdashbord/userdashbord.component';
import { SidebarComponent } from './component/user/sidebar/sidebar.component';
import { AdminSidebarComponent  } from './component/admin/sidebar/sidebar.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ViewCategoryComponent } from './component/admin/Category/view-category/view-category.component';
import { AddCategoryComponent } from './component/admin/Category/add-category/add-category.component';
import { UpdateCategoryComponent } from './component/admin/Category/update-category/update-category.component';

import {  MatOptionModule } from '@angular/material/core';
import { AddQuizeComponent } from './component/admin/Quizess/add-quize/add-quize.component';
import { UpdateQuizeComponent } from './component/admin/Quizess/update-quize/update-quize.component';
import { ViewQuizeComponent } from './component/admin/Quizess/view-quize/view-quize.component';
import { AddQuestionComponent } from './component/admin/Question/add-question/add-question.component';
import { UpdateQuestionComponent } from './component/admin/Question/update-question/update-question.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './services/interCeptorService/auth.interceptor';
import { RouterModule } from '@angular/router';
import { WelcompageComponent } from './component/admin/welcompage/welcompage.component';
import { ViewQuestionComponent } from './component/admin/Question/view-question/view-question.component';
import { LoadquizComponent } from './component/user/loadquiz/loadquiz.component';
import { InstructionComponent } from './component/user/instruction/instruction.component';
import { StartexamComponent } from './component/user/startexam/startexam.component';
import { UserprofileComponent } from './component/user/userprofile/userprofile.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    AdmindashbordComponent,
    UserdashbordComponent,
    SidebarComponent,
    AdminSidebarComponent,
    ProfileComponent,
    ViewCategoryComponent,
    AddCategoryComponent,
    UpdateCategoryComponent,
 
    AddQuizeComponent,
    UpdateQuizeComponent,
    ViewQuizeComponent,
    AddQuestionComponent,
    UpdateQuestionComponent,
    ViewQuestionComponent,
   FooterComponent,
    WelcompageComponent,
    LoadquizComponent,
    InstructionComponent,
    StartexamComponent,
    UserprofileComponent ,



  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    MatOptionModule,
    MatSelectModule,
    MatSlideToggleModule,
    HttpClientModule,
    RouterModule,
    MatTableModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
    
    
  
    
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
