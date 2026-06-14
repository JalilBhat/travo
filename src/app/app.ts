import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { About } from './about/about';
import { Blog } from './blog/blog';
import { Contact } from './contact/contact';
import { Destinations } from './destinations/destinations';
import { Faq } from './faq/faq';
import { FloatWhatsapp } from './float-whatsapp/float-whatsapp';
import { Gallery } from './gallery/gallery';
import { Hero } from './hero/hero';
import { NavHeader } from './nav-header/nav-header';
import { Packages } from './packages/packages';
import { Reviews } from './reviews/reviews';
import { Services } from './services/services';
import { SITE } from './shared/site.constants';
import { SiteFooter } from './site-footer/site-footer';

@Component({
  selector: 'app-root',
  imports: [
    NavHeader,
    Hero,
    About,
    Services,
    Destinations,
    Packages,
    Reviews,
    Gallery,
    Faq,
    Blog,
    Contact,
    SiteFooter,
    FloatWhatsapp,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title,
  ) {}

  protected readonly companyInfo = {
    brandName: SITE.brandName,
    whatsappNumber: SITE.whatsappNumber,
    contactEmail: SITE.contactEmail,
    contactPhone: SITE.contactPhone,
  };

  ngOnInit(): void {
    this.title.setTitle('Daaet Tour and Travel');

    this.meta.updateTag({
      property: 'og:title',
      content: 'Daaet Tour and Travel',
    });

    this.meta.updateTag({
      property: 'og:description',
      content: 'Explore Kashmir with customized tour packages.',
    });

    this.meta.updateTag({
      property: 'og:image',
      content: 'https://daaettour.in/assets/images/kashmir-banner.jpg',
    });

    this.meta.updateTag({
      property: 'og:url',
      content: 'https://daaettour.in',
    });

    this.meta.updateTag({
      property: 'og:type',
      content: 'website',
    });
  }
}
