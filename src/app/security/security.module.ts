import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialsModule } from '../materials/materials.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VerifyUserComponent } from './verify-user/verify-user.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    VerifyUserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialsModule,
    RouterModule.forChild([
      {path:'login',component:LoginComponent},
      {path:'sign-up',component:SignUpComponent},
      {path:'verify',component:VerifyUserComponent}
    ])
  ]
})
export class SecurityModule { }
