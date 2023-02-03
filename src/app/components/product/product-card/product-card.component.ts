import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from 'src/app/common/cart-item';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {


  @Input() product: Product | undefined;

  constructor(private cartService: CartService) { }


  addToCart(product: any){
    console.log(`Adding to cart: ${product.name}, ${product.unitPrice}`);

    const theCartItem = new CartItem(product);

    this.cartService.addToCart(theCartItem);
  }


  ngOnInit() {

   }

}
