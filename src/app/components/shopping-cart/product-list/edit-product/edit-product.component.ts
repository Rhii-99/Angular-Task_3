import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product: Product;
  submitted = false;
  id: number;
  //isLoading: boolean= false;
  addProductForm: any;

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    //this.isLoading = true;
    this.id = this.route.snapshot.params['id'];
    this.product =this.productService.productList[this.id];
    // setTimeout(() => {
    //   this.addProductForm.setValue({
    //     productTitle: this.product.title,
    //     productCategory: this.product.category,
    //     productPrice: this.product.price,
    //     productDescription: this.product.description,
    //   });
    // });
  }
  onSubmit( addProduct: Form): void{
    this.submitted = true;
    this.update();
  }
  update() {
    this.productService.updateProduct({ id: this.id, value: this.product }).subscribe(
       (data) => {
       console.log(data);
         this.gotoShop();
      },
       (error) => console.log(error)
    );
    console.log("Update called!");
   }
   gotoShop(){
     this.router.navigate(['/shop']);
   }

}
