import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router:Router){}

  RedirectToAlbums():void{
    this.router.navigate(['/albums']);
  }
  RedirectToAbout():void{
    this.router.navigate(['/about']);
  }
}
