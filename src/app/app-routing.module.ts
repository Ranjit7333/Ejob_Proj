import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { PageNotComponent } from './page-not/page-not.component';


const routes: Routes = [
  {path:'',redirectTo:'/user',pathMatch:'full'},
  { path: 'foods', loadChildren: () => import('./foods/foods.module').then(m => m.FoodsModule),canActivate:[AuthGuard]},
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: 'signUp', loadChildren: () => import('./sign-up/sign-up.module').then(m => m.SignUpModule) },
  {path:'**',component:PageNotComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
