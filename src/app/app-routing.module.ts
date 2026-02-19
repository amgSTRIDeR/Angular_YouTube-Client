import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import PageNotFoundComponent from './core/pages/page-not-found/page-not-found.component';
import AuthenticationGuard from './core/guards/authentication.guard';
import LoginGuard from './core/guards/login.guard';
import AdminComponent from './core/pages/admin/admin.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', loadChildren: () => import('./youtube/youtube.module').then((m) => m.default), canActivate: [AuthenticationGuard] },
  { path: 'login', loadChildren: () => import('./auth/auth.module').then((m) => m.default), canActivate: [LoginGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthenticationGuard] },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '404', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { useHash: true }), CommonModule],
  exports: [RouterModule],
})
export default class AppRoutingModule { }
