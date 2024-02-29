import { Component, OnInit } from '@angular/core';

import { products } from '../products';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  products = [...products];
  constructor(private route: ActivatedRoute) {}
  category: string = ''; // Initialize category property
  ngOnInit(): void {
    // Retrieve the category from the route parameter
    this.category = this.route.snapshot.paramMap.get('category')||'';
    console.log('Current category:', this.category);
  }

  share(text: string) {
    navigator.clipboard.writeText(text).then(function () {
        console.log('Async: Copying to clipboard was successful!');
        window.open('https://web.telegram.org/k/', '_blank');
    }, function (err) {
        console.error('Async: Could not copy text: ', err);
    });
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  toggleLike(product: any) {
    product.liked = !product.liked;
    if (product.liked) {
      product.likes++;
    } else {
      product.likes--;
    }
  }
}
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/