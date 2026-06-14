import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { FAQS, PACKAGES, SEO, SITE } from './site.constants';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly jsonLdId = 'seo-structured-data';

  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private document: Document,
  ) {}

  applyHomePageSeo(): void {
    this.title.setTitle(SEO.title);

    this.meta.updateTag({ name: 'description', content: SEO.description });
    this.meta.updateTag({ name: 'keywords', content: SEO.keywords });
    this.meta.updateTag({ name: 'author', content: SITE.brandName });
    this.meta.updateTag({ name: 'robots', content: 'index, follow, max-image-preview:large' });
    this.meta.updateTag({ name: 'googlebot', content: 'index, follow' });

    this.meta.updateTag({ name: 'geo.region', content: SEO.geo.region });
    this.meta.updateTag({ name: 'geo.placename', content: SEO.geo.placename });
    this.meta.updateTag({ name: 'geo.position', content: SEO.geo.position });
    this.meta.updateTag({ name: 'ICBM', content: SEO.geo.position.replace(';', ', ') });

    this.setOpenGraphTags();
    this.setTwitterTags();
    this.setCanonicalUrl(SITE.siteUrl);
    this.setStructuredData();
  }

  private setOpenGraphTags(): void {
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: SITE.brandName });
    this.meta.updateTag({ property: 'og:locale', content: SEO.locale });
    this.meta.updateTag({ property: 'og:title', content: SEO.title });
    this.meta.updateTag({ property: 'og:description', content: SEO.description });
    this.meta.updateTag({ property: 'og:url', content: SITE.siteUrl });
    this.meta.updateTag({ property: 'og:image', content: SEO.ogImage });
    this.meta.updateTag({ property: 'og:image:alt', content: `${SITE.brandName} — Kashmir tour packages and travel services` });
  }

  private setTwitterTags(): void {
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: SEO.title });
    this.meta.updateTag({ name: 'twitter:description', content: SEO.description });
    this.meta.updateTag({ name: 'twitter:image', content: SEO.ogImage });
    this.meta.updateTag({ name: 'twitter:image:alt', content: `${SITE.brandName} — Kashmir tour packages` });
  }

  private setCanonicalUrl(url: string): void {
    const head = this.document.head;
    let link = head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      head.appendChild(link);
    }

    link.setAttribute('href', url);
  }

  private setStructuredData(): void {
    const schemas = [
      this.buildTravelAgencySchema(),
      this.buildWebSiteSchema(),
      this.buildFaqSchema(),
      this.buildPackageListSchema(),
    ];

    const existing = this.document.getElementById(this.jsonLdId);
    if (existing) {
      existing.remove();
    }

    const script = this.document.createElement('script');
    script.id = this.jsonLdId;
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schemas);
    this.document.head.appendChild(script);
  }

  private buildTravelAgencySchema(): Record<string, unknown> {
    return {
      '@context': 'https://schema.org',
      '@type': 'TravelAgency',
      name: SITE.brandName,
      url: SITE.siteUrl,
      logo: SEO.ogImage,
      image: SEO.ogImage,
      telephone: SITE.contactPhone,
      email: SITE.contactEmail,
      priceRange: '₹₹',
      areaServed: ['Kashmir', 'Ladakh', 'Srinagar', 'Gulmarg', 'Pahalgam', 'Sonamarg'],
      address: {
        '@type': 'PostalAddress',
        addressLocality: SITE.address.locality,
        addressRegion: SITE.address.region,
        addressCountry: SITE.address.country,
        postalCode: SITE.address.postalCode,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 34.0837,
        longitude: 74.7973,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
      sameAs: [`https://wa.me/${SITE.whatsappNumber}`],
    };
  }

  private buildWebSiteSchema(): Record<string, unknown> {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE.brandName,
      url: SITE.siteUrl,
      description: SEO.description,
      inLanguage: 'en-IN',
      publisher: {
        '@type': 'Organization',
        name: SITE.brandName,
        logo: SEO.ogImage,
      },
    };
  }

  private buildFaqSchema(): Record<string, unknown> {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQS.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      })),
    };
  }

  private buildPackageListSchema(): Record<string, unknown> {
    return {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Kashmir Tour Packages',
      itemListElement: PACKAGES.map((pkg, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'TouristTrip',
          name: pkg.name,
          description: pkg.includes.join(', '),
          touristType: pkg.category,
          offers: {
            '@type': 'Offer',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock',
            url: `${SITE.siteUrl}/#packages`,
          },
        },
      })),
    };
  }
}
