import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CONTACT_PROCESS, SITE } from '../shared/site.constants';
import { getWhatsappUrl } from '../shared/whatsapp.util';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected readonly site = SITE;
  protected readonly process = CONTACT_PROCESS;

  protected readonly inquiry = {
    name: '',
    phone: '',
    category: 'Family Trip',
    month: '',
    travelers: '',
    notes: '',
  };

  protected readonly whatsappUrl = getWhatsappUrl(false);

  protected submitInquiry(): void {
    if (typeof window !== 'undefined') {
      window.open(getWhatsappUrl(true, this.inquiry), '_blank', 'noopener,noreferrer');
    }
  }
}
