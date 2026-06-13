import { Component, Input } from '@angular/core';

interface CompanyInfo {
  brandName: string;
  whatsappNumber: string;
  contactEmail: string;
  contactPhone: string;
}

@Component({
  selector: 'app-nav-header',
  imports: [],
  templateUrl: './nav-header.html',
  styleUrl: './nav-header.scss',
})
export class NavHeader {
  @Input() props: CompanyInfo = {
    brandName: '',
    whatsappNumber: '',
    contactEmail: '',
    contactPhone: '',
  };
  protected readonly navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Destinations', href: '#destinations' },
    { label: 'Packages', href: '#packages' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Blog', href: '#blogs' },
    { label: 'Contact', href: '#contact' },
  ];
}
