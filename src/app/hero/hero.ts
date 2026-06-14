import { Component } from '@angular/core';
import { HERO_HIGHLIGHTS } from '../shared/site.constants';
import { getWhatsappUrl } from '../shared/whatsapp.util';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  protected readonly heroHighlights = HERO_HIGHLIGHTS;
  protected readonly whatsappUrl = getWhatsappUrl(false);
}
