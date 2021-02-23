import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-list/product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ShoppingCartComponent } from './shopping-cart.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthModule } from 'src/app/auth/auth.module';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { ShoppingRoutesModule } from './shopping-routes.module';
import { EditProductComponent } from './product-list/edit-product/edit-product.component';


@NgModule({
  declarations: [ 
    ProductListComponent,
    CartComponent,
    CartItemComponent,
    ShoppingCartComponent,
    ProductDetailComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule,
    AuthModule,
    SharedModule,
    FormsModule,
    ShoppingRoutesModule
  ],
  exports:[
    ProductListComponent,
    CartComponent,
    CartItemComponent,
    ShoppingCartComponent,
    ProductDetailComponent,
    EditProductComponent,
    RouterModule
  ]
})
export class ShoppingCartModule { }
