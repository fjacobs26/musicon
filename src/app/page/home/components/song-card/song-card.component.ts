import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-song-card',
  standalone: true,
  imports: [],
  templateUrl: './song-card.component.html',
  styleUrl: './song-card.component.scss'
})
export class SongCardComponent {
  @Input() data: any;
  @Output() dataEventEmit = new EventEmitter();
}
