import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/services/product.service'
import { Product } from 'src/app/models/product';
//import { productsUrl } from 'src/app/config/api';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = []
  searchText= '';
  name: string;
  product: Product[] =[];

  constructor(private productService: ProductService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.productList = products;
      console.log(this.productList);
      this.productService.productList= products;
      
    })
  }
  AddToCart(){
    console.log("add product to cart");
  }
  onDeleteProduct(id: number) {
    if (confirm('Are you sure you want to delete ?')){
      console.log("Delete product");
    this.productService.deleteProduct(id).subscribe(
      (data) => {
        console.log("deleted product");
      },
      (error) => console.log(error)
    );
    }
  }
  onViewDetails(id: number){
      console.log("ID is" +id);
      this.router.navigate(['product_detail',id]);
    }
  }

