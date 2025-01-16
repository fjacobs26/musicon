import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TitleIconComponent } from '../../components/title-icon/title-icon.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TitleIconComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
