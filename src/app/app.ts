import { Component, OnInit } from '@angular/core';
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
import { SeoService } from './shared/seo.service';
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
  constructor(private seo: SeoService) {}

  protected readonly companyInfo = {
    brandName: SITE.brandName,
    whatsappNumber: SITE.whatsappNumber,
    contactEmail: SITE.contactEmail,
    contactPhone: SITE.contactPhone,
  };

  ngOnInit(): void {
    this.seo.applyHomePageSeo();
  }
}
