import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AuthComponent } from './auth/auth.component'

const routes: Routes = [ 
 {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth',
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: 'shop',
    loadChildren: () => import("./components/shopping-cart/shopping-cart.module").then(m => m.ShoppingCartModule)
  },
//   { path: '**', 
//   component: PageNotFoundComponent 
// },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}
