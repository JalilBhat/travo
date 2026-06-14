import { SITE } from './site.constants';

export interface InquiryForm {
  name: string;
  phone: string;
  category: string;
  month: string;
  travelers: string;
  notes: string;
}

export function getWhatsappUrl(prefill = true, inquiry?: InquiryForm): string {
  if (!prefill) {
    return `https://wa.me/${SITE.whatsappNumber}`;
  }

  const message =
    `Hello ${SITE.brandName},%0A` +
    `I want to plan a Kashmir trip.%0A` +
    `Name: ${inquiry?.name || '-'}%0A` +
    `Phone: ${inquiry?.phone || '-'}%0A` +
    `Trip Type: ${inquiry?.category || '-'}%0A` +
    `Month: ${inquiry?.month || '-'}%0A` +
    `Travelers: ${inquiry?.travelers || '-'}%0A` +
    `Notes: ${inquiry?.notes || '-'}`;

  return `https://wa.me/${SITE.whatsappNumber}?text=${message}`;
}
