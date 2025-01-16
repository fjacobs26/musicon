import { Component } from '@angular/core';

@Component({
  selector: 'app-title-icon',
  standalone: true,
  imports: [],
  templateUrl: './title-icon.component.html',
  styleUrl: './title-icon.component.scss'
})
export class TitleIconComponent {
  redirectToHome(){
    console.log('prueba')
  }
}
