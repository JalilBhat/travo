import { Component } from '@angular/core';
import { ABOUT, QUICK_STATS, WHY_US } from '../shared/site.constants';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly about = ABOUT;
  protected readonly quickStats = QUICK_STATS;
  protected readonly whyUs = WHY_US;
}
