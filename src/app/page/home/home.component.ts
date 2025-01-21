import { JsonPipe, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TitleIconComponent } from '../../components/title-icon/title-icon.component';
import { FilterComponent } from '../../components/filter/filter.component';
import { SpotifyService } from '../../services/spotify.service';
import { SongCardComponent } from './components/song-card/song-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TitleIconComponent, FilterComponent, SongCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  cardsData: {image: string; artist: string, title: string}[] = []

  constructor(
    private spotifyService: SpotifyService
  ){}

  ngOnInit(): void {
    this.spotifyService.searchByName('Welcome to the jungle').subscribe(searchData => {
      this.cardsData = searchData.map((data: any) => {
        return {
          image: data.coverArt.sources[1].url,
          artist: data.artists.items[0].profile.name,
          title: data.name
        }
      })
      console.log(this.cardsData);
    })
  }
}
