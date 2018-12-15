import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PathNotFoundComponent} from './layout/components/path-not-found/path-not-found.component';
import {HomeComponent} from './layout/components/home/home.component';
import {CartListComponent} from './cart/component/cart-list/cart-list.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'cart-info',
    component: CartListComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PathNotFoundComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
