import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AdmindashbordComponent } from './component/admin/admindashbord/admindashbord.component';
import { UserdashbordComponent } from './component/user/userdashbord/userdashbord.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ViewCategoryComponent } from './component/admin/Category/view-category/view-category.component';
import { AddCategoryComponent } from './component/admin/Category/add-category/add-category.component';
import { UpdateCategoryComponent } from './component/admin/Category/update-category/update-category.component';
import { ViewQuizeComponent } from './component/admin/Quizess/view-quize/view-quize.component';
import { AddQuizeComponent } from './component/admin/Quizess/add-quize/add-quize.component';
import { UpdateQuizeComponent } from './component/admin/Quizess/update-quize/update-quize.component';
import { ViewQuestionComponent } from './component/admin/Question/view-question/view-question.component';
import { AddQuestionComponent } from './component/admin/Question/add-question/add-question.component';
import { UpdateQuestionComponent } from './component/admin/Question/update-question/update-question.component';
import { AuthGuard } from './services/adminGuard/auth.guard';
import { WelcompageComponent } from './component/admin/welcompage/welcompage.component';
import { LoadquizComponent } from './component/user/loadquiz/loadquiz.component';
import { InstructionComponent } from './component/user/instruction/instruction.component';
import { AuthUserGuard } from './services/userGuard/auth-user.guard';
import { StartexamComponent } from './component/user/startexam/startexam.component';
import { UserprofileComponent } from './component/user/userprofile/userprofile.component';



const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"admin-dashbord",component:AdmindashbordComponent,canActivate:[AuthGuard],
  children:[
    {path:"",component:WelcompageComponent},
    {path:"profile", component:ProfileComponent},
    {path:"allCategory",component:ViewCategoryComponent},
    {path:"addCategory",component:AddCategoryComponent},
    {path:"updateCategory/:id",component:UpdateCategoryComponent},
    {path:"allQuize",component:ViewQuizeComponent},
    {path:"addQuize",component:AddQuizeComponent},
    {path:"updateQuize/:id",component:UpdateQuizeComponent},
    {path:"allQuestion/:id/:title",component:ViewQuestionComponent},
    {path:"addQuestion/:id/:title",component:AddQuestionComponent},
    {path:"updateQuestion/:id/:title",component:UpdateQuestionComponent}
 
  ]
},
  {path:"user-dashbord" ,component:UserdashbordComponent,canActivate:[AuthUserGuard],
children:[
  {path:":category_id",component:LoadquizComponent},
  {path:"instructions/:quiz_id", component:InstructionComponent},
  {path:"userprofile",component:UserprofileComponent}
]
},
 {path:'startExam/:quiz_id',component:StartexamComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
