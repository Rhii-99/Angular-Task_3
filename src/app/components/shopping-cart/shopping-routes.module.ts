import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { CartComponent } from './cart/cart.component';
import { ProductDetailComponent } from './product-list/product-detail/product-detail.component';
import { EditProductComponent } from './product-list/edit-product/edit-product.component';
import {SharedModule} from '../../shared/shared.module';

const ShoppingRoutes =[
  {
    path: '',
    component: ShoppingCartComponent
  },
      {
        path: 'cart',  
        component: CartComponent,canActivate:[AuthGuard],
      },
      {
        path: 'product_detail/:id',
      component: ProductDetailComponent,canActivate:[AuthGuard]
      },
      {
        path: 'edit-product/:id',
      component: EditProductComponent,canActivate:[AuthGuard]
      }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ShoppingRoutes),
    SharedModule
  ],
  exports: [
    RouterModule,
  ]
})
export class ShoppingRoutesModule { }
