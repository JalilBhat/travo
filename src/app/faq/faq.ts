import { Component } from '@angular/core';
import { FAQS } from '../shared/site.constants';

@Component({
  selector: 'app-faq',
  imports: [],
  templateUrl: './faq.html',
  styleUrl: './faq.scss',
})
export class Faq {
  protected readonly faqs = FAQS;
}
