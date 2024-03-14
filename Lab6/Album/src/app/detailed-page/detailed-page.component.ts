import { CommonModule } from '@angular/common';
import { HttpClient ,HttpClientModule} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detailed-page',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './detailed-page.component.html',
  styleUrl: './detailed-page.component.css'
})
export class DetailedPageComponent implements OnInit {
  album: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? +idParam : null;
    if (id !== null) {
      this.fetchAlbum(id);
    } else {
      console.error('Invalid album ID');
    }
  }
  
  saveChanges(): void {
  }
  fetchAlbum(id: number): void {
    const url = `https://jsonplaceholder.typicode.com/albums/${id}`;
    this.http.get<any>(url).subscribe(album => {
      this.album = album;
    });
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }

  goToPhotos(): void {
    this.router.navigate(['/albums', this.album.id, 'photos']);
  }
}