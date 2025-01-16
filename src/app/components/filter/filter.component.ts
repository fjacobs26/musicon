import { Component } from '@angular/core';
import { bootstrapSearch } from '@ng-icons/bootstrap-icons'
import { NgIconComponent } from '@ng-icons/core';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  icon = bootstrapSearch;
}
