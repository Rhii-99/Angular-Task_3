import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  
  id: number;
  public product: Product[]=[];

  
  constructor(private router: Router,private route: ActivatedRoute, private productService: ProductService,) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.productService.getProduct(this.id).subscribe((data:Product[]) =>{
      console.log(data);
      this.product = data;
    },
  (error) => {
    return console.log(error);
    }
  );
  }
  onEditProduct(id: number){
    console.log("ID is" +id);
    this.router.navigate(['edit-product', id]);
  }
}




