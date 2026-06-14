import { Component } from '@angular/core';
import { DESTINATIONS } from '../shared/site.constants';

@Component({
  selector: 'app-destinations',
  imports: [],
  templateUrl: './destinations.html',
  styleUrl: './destinations.scss',
})
export class Destinations {
  protected readonly highlights = DESTINATIONS;
}
