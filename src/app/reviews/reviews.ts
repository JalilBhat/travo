import { Component } from '@angular/core';
import { TESTIMONIALS } from '../shared/site.constants';

@Component({
  selector: 'app-reviews',
  imports: [],
  templateUrl: './reviews.html',
  styleUrl: './reviews.scss',
})
export class Reviews {
  protected readonly testimonials = TESTIMONIALS;
}
