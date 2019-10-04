import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user.routes';
import { ProfileComponent } from './profile.component';
import { LoginComponent } from './login.component';



@NgModule({
  declarations: [
    ProfileComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ],
  providers: []
})
export class UserModule { }
