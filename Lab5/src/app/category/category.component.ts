import { Component } from '@angular/core';
import { products } from '../products';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  products = [...products];
  constructor(private route: ActivatedRoute,private router: Router) {}
  categories = new Set(products.map(products => products.category));
  category: string = ''; // Initialize category property

  navigateToCategory(category: string) {
    this.router.navigate(['', category]); // Navigate to '/main/:category'
  }
}
