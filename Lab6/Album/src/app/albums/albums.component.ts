import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

export interface Album {
  userId: number;
  id: number;
  title: string;
}
@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit{

  private albumsUrl = 'https://jsonplaceholder.typicode.com/albums';
  albums$: Observable<Album[]> | undefined;
  constructor(private http: HttpClient,private router:Router) { }
  ngOnInit(): void {
    this.albums$ = this.getAlbums();
  }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.albumsUrl);
  }

  deleteAlbum(event: MouseEvent): void {
    // Get the target element (button)
    const button = event.target as HTMLButtonElement;

    // Get the parent div of the button
    const div = button.parentElement;

    // Check if the parent div exists before trying to remove it
    if (div) {
        // Remove the parent div
        div.remove();
    } else {
        console.error("Parent div not found.");
    }
}
redirectToAlbum(id: number): void {
  this.router.navigate(['/albums', id]); // Navigate to /albums/:id
}


}
