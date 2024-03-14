import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.css'
})
export class PhotosComponent implements OnInit {
  albumId: number | undefined;
  album: any;
  photos: any[] = [];

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.albumId = params['id'];
      this.fetchAlbum();
      this.fetchPhotos();
    });
  }

  fetchAlbum() {
    this.http.get<any>('https://jsonplaceholder.typicode.com/albums/' + this.albumId).subscribe(
      (data) => {
        this.album = data;
      },
      (error) => {
        console.error('Error fetching album:', error);
      }
    );
  }

  fetchPhotos() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums/' + this.albumId + '/photos').subscribe(
      (data) => {
        this.photos = data;
      },
      (error) => {
        console.error('Error fetching photos:', error);
      }
    );
  }
  returnBack(){
    const albumId = this.route.snapshot.params['id'];
    this.router.navigate(['/albums', albumId]);
  }
}