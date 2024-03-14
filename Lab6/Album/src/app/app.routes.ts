import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { DetailedPageComponent } from './detailed-page/detailed-page.component';
import { PhotosComponent } from './photos/photos.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'albums',component:AlbumsComponent},
    {path:'albums/:id',component:DetailedPageComponent},
    {path:'albums/:id/photos',component:PhotosComponent},
    
];
