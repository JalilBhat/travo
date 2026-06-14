import { Component } from '@angular/core';
import { getWhatsappUrl } from '../shared/whatsapp.util';

@Component({
  selector: 'app-float-whatsapp',
  imports: [],
  templateUrl: './float-whatsapp.html',
  styleUrl: './float-whatsapp.scss',
})
export class FloatWhatsapp {
  protected readonly whatsappUrl = getWhatsappUrl(false);
}
