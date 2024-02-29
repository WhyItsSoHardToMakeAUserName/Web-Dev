import { Component, OnInit } from '@angular/core';
import { products } from './products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products = [...products]
  
  categories = new Set(products.map(products => products.category));
  ngOnInit(): void {
    for(const category of this.categories){
      console.log(category);
    }
  }
  test(text: String){
    
    console.log(text);
  }
  constructor(private router: Router) {}

  navigateToCategory(category: string) {
    this.router.navigate(['', category]); // Navigate to '/main/:category'
  }
  
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/