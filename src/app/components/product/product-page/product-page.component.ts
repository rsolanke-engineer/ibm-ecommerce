import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { CartItem } from 'src/app/common/cart-item';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {


  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
    ) {}


    getProduct(): void {
      const id = String(this.route.snapshot.paramMap.get('id'));
      this.productService
        .getProduct(id)
        .subscribe((product) => (this.product = product));

    }

    addToCart(product: any){
      console.log(`Adding to cart: ${product.name}, ${product.unitPrice}`);

      const theCartItem = new CartItem(product);

      this.cartService.addToCart(theCartItem);
    }

  ngOnInit(): void {
    this.getProduct();

  }

}
