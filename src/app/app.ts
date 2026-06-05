import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly brandName = 'Kashmir Trails';
  protected readonly whatsappNumber = '917006180286';
  protected readonly contactEmail = 'i.jalil.ahmad@gmail.com';
  protected readonly contactPhone = '+91 7006180286';

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

  protected readonly inquiry = {
    name: '',
    phone: '',
    category: 'Family Trip',
    month: '',
    travelers: '',
    notes: '',
  };

  protected readonly heroHighlights = [
    'Kashmir Tour Packages',
    'Hotel & Houseboat Booking',
    'Cab & Airport Transfers',
    'Custom Itineraries',
  ];

  protected readonly about = {
    title: 'Your Trusted Kashmir Travel Partner',
    lead: 'We plan complete Kashmir journeys with local expertise, verified stays, and dependable on-ground support.',
    body: 'From Srinagar houseboats to Gulmarg snow adventures and Pahalgam valleys, our team designs trips that balance sightseeing, comfort, and authentic local experiences. Transparent pricing and responsive support are at the core of every itinerary.',
    bullets: [
      'Registered tourism partners across Jammu & Kashmir',
      'Handpicked hotels, houseboats, and transport vendors',
      'Family, couple, honeymoon, and adventure specialists',
    ],
  };

  protected readonly quickStats = [
    { label: 'Years Experience', value: '11+' },
    { label: 'Happy Travelers', value: '5,000+' },
    { label: 'Destinations Covered', value: '25+' },
    { label: 'Support', value: '24/7' },
  ];

  protected readonly services = [
    {
      title: 'Tour Packages',
      desc: 'Curated multi-day Kashmir itineraries for every travel style.',
      icon: '🧭',
      image:
        'https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Hotel Bookings',
      desc: 'Budget to luxury stays including iconic Dal Lake houseboats.',
      icon: '🏨',
      image:
        'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Cab Services',
      desc: 'Airport transfers and full-day sightseeing with local drivers.',
      icon: '🚕',
      image:
        'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Flight Assistance',
      desc: 'Route planning and booking guidance aligned with your trip dates.',
      icon: '✈️',
      image:
        'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Honeymoon Tours',
      desc: 'Romantic packages with private experiences and premium stays.',
      icon: '💍',
      image:
        'https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Adventure & Trekking',
      desc: 'Gulmarg gondola, snow activities, and guided valley excursions.',
      icon: '🏔️',
      image:
        'https://images.unsplash.com/photo-1482192505345-5655af888cc4?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Group & Corporate',
      desc: 'Structured plans for families, teams, and student batches.',
      icon: '👥',
      image:
        'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: '24/7 Travel Desk',
      desc: 'Continuous help before, during, and after your Kashmir trip.',
      icon: '📞',
      image:
        'https://images.unsplash.com/photo-1556155092-8707de31f9c4?auto=format&fit=crop&w=900&q=80',
    },
  ];

  protected readonly whyUs = [
    { title: 'Local Experts', desc: 'Destination-first planning by Kashmir-based coordinators.' },
    {
      title: 'Clear Pricing',
      desc: 'Upfront estimates with customizable hotel and transport tiers.',
    },
    {
      title: 'Verified Network',
      desc: 'Trusted partners for stays, cabs, and on-ground activities.',
    },
    { title: 'Fast Support', desc: 'Quick responses for itinerary changes and trip assistance.' },
  ];

  protected readonly highlights = [
    {
      name: 'Srinagar',
      image:
        'https://images.unsplash.com/photo-1613553497126-a44624272024?auto=format&fit=crop&w=1200&q=80',
      info: 'Dal Lake · Mughal Gardens · Shikara',
      desc: 'Lake cruises, heritage gardens, and houseboat stays.',
      tag: 'Most Popular',
    },
    {
      name: 'Gulmarg',
      image:
        'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
      info: 'Gondola · Skiing · Snow Views',
      desc: 'Winter sports and alpine scenery year-round.',
      tag: 'Adventure',
    },
    {
      name: 'Pahalgam',
      image:
        'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
      info: 'Lidder Valley · Riverside · Trekking',
      desc: 'Peaceful valleys, pine forests, and nature walks.',
      tag: 'Family',
    },
    {
      name: 'Sonamarg',
      image:
        'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
      info: 'Meadows · Glaciers · Scenic Drives',
      desc: 'Golden meadows and high-altitude day trips.',
      tag: 'Scenic',
    },
    {
      name: 'Doodpathri',
      image:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
      info: 'Meadows · Picnic · Day Trip',
      desc: 'Emerging meadow destination for relaxed outings.',
      tag: 'Day Tour',
    },
    {
      name: 'Mughal Gardens',
      image:
        'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80',
      info: 'Nishat · Shalimar · Heritage',
      desc: 'Classic garden circuits within Srinagar region.',
      tag: 'Culture',
    },
  ];

  protected readonly packageCategories = ['All', 'Family', 'Couple', 'Adventure'];
  protected readonly selectedCategory = signal('All');

  protected readonly packages = [
    {
      name: 'Kashmir Paradise Package',
      days: '4 Nights / 5 Days',
      price: 'From ₹18,999',
      category: 'Family',
      image:
        'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=900&q=80',
      includes: ['Srinagar stay', 'Gulmarg day trip', 'Cab & sightseeing'],
    },
    {
      name: 'Valleys & Meadows Escape',
      days: '5 Nights / 6 Days',
      price: 'From ₹24,499',
      category: 'Couple',
      image:
        'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=900&q=80',
      includes: ['Pahalgam visit', 'Houseboat night', 'Private transfers'],
    },
    {
      name: 'Snow Escape Gulmarg',
      days: '3 Nights / 4 Days',
      price: 'From ₹16,499',
      category: 'Adventure',
      image:
        'https://images.unsplash.com/photo-1418985991508-e47386d96a71?auto=format&fit=crop&w=900&q=80',
      includes: ['Gondola experience', 'Winter activities', 'Hotel + cab'],
    },
    {
      name: 'Honeymoon Kashmir Delight',
      days: '5 Nights / 6 Days',
      price: 'From ₹28,999',
      category: 'Couple',
      image:
        'https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=900&q=80',
      includes: ['Romantic add-ons', 'Premium stay options', 'Shikara evening'],
    },
    {
      name: 'Family Fun Kashmir',
      days: '6 Nights / 7 Days',
      price: 'From ₹31,999',
      category: 'Family',
      image:
        'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80',
      includes: ['Multi-destination route', 'Kid-friendly pacing', 'Full transport'],
    },
    {
      name: 'Srinagar Quick Retreat',
      days: '2 Nights / 3 Days',
      price: 'From ₹12,999',
      category: 'Couple',
      image:
        'https://images.unsplash.com/photo-1613553497126-a44624272024?auto=format&fit=crop&w=900&q=80',
      includes: ['City highlights', 'Dal Lake experience', 'Airport pickup'],
    },
  ];

  protected readonly process = [
    {
      step: '01',
      title: 'Share Your Plan',
      desc: 'Tell us dates, budget, and travel preferences.',
    },
    {
      step: '02',
      title: 'Get Custom Quote',
      desc: 'Receive itinerary, stays, and transparent pricing.',
    },
    {
      step: '03',
      title: 'Confirm & Travel',
      desc: 'We coordinate everything with on-trip support.',
    },
  ];

  protected readonly testimonials = [
    {
      name: 'Ritika & Arjun',
      text: 'Houseboat stay and Gulmarg day were perfectly organized. Support was quick on WhatsApp.',
      trip: 'Honeymoon · 5 Days',
      rating: 5,
    },
    {
      name: 'Khan Family',
      text: 'Great balance of sightseeing and rest for kids. Drivers and hotels were reliable.',
      trip: 'Family · 6 Days',
      rating: 5,
    },
    {
      name: 'Naveen Sharma',
      text: 'Transparent costing and flexible itinerary changes. Would book again for winter trip.',
      trip: 'Adventure · 4 Days',
      rating: 5,
    },
  ];

  protected readonly faqs = [
    {
      q: 'What services do you provide?',
      a: 'Tour packages, hotel and houseboat bookings, cab services, flight assistance, honeymoon plans, and adventure itineraries across Kashmir.',
    },
    {
      q: 'What is the best time to visit Kashmir?',
      a: 'March to May for spring, June to September for valleys, and December to February for snow in Gulmarg.',
    },
    {
      q: 'Can packages be customized?',
      a: 'Yes. Duration, hotel category, transport type, and activities can all be adjusted to your budget.',
    },
    {
      q: 'Do you offer airport pickup?',
      a: 'Yes. Airport transfers and daily sightseeing cabs are included or available as add-ons.',
    },
  ];

  protected readonly blogs = [
    {
      title: 'Top Places to Visit in Kashmir',
      category: 'Travel Guide',
      date: 'May 2026',
      image:
        'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1000&q=80',
      excerpt: 'Must-visit lakes, gardens, meadows, and mountain towns for first-time travelers.',
    },
    {
      title: 'Best Time for Gulmarg Snow Trip',
      category: 'Seasonal',
      date: 'Apr 2026',
      image:
        'https://images.unsplash.com/photo-1418985991508-e47386d96a71?auto=format&fit=crop&w=1000&q=80',
      excerpt: 'Weather windows, clothing tips, and activity planning for winter holidays.',
    },
    {
      title: 'How to Plan a Kashmir Budget Trip',
      category: 'Planning',
      date: 'Mar 2026',
      image:
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1000&q=80',
      excerpt: 'Practical ways to manage cost without missing core experiences.',
    },
  ];

  protected readonly gallery = [
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1613553497126-a44624272024?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1418985991508-e47386d96a71?auto=format&fit=crop&w=800&q=80',
  ];

  protected readonly footerColumns = [
    {
      title: 'Quick Links',
      links: ['About', 'Services', 'Destinations', 'Packages', 'Reviews', 'Contact'],
    },
    {
      title: 'Destinations',
      links: ['Srinagar', 'Gulmarg', 'Pahalgam', 'Sonamarg', 'Doodpathri'],
    },
    {
      title: 'Services',
      links: ['Tour Packages', 'Hotels', 'Cab Rental', 'Honeymoon', 'Adventure'],
    },
  ];

  protected setCategory(category: string): void {
    this.selectedCategory.set(category);
  }

  protected getFilteredPackages() {
    const category = this.selectedCategory();
    if (category === 'All') return this.packages;
    return this.packages.filter((p) => p.category === category);
  }

  protected getWhatsappUrl(prefill = true): string {
    if (!prefill) {
      return `https://wa.me/${this.whatsappNumber}`;
    }
    const message =
      `Hello ${this.brandName},%0A` +
      `I want to plan a Kashmir trip.%0A` +
      `Name: ${this.inquiry.name || '-'}%0A` +
      `Phone: ${this.inquiry.phone || '-'}%0A` +
      `Trip Type: ${this.inquiry.category || '-'}%0A` +
      `Month: ${this.inquiry.month || '-'}%0A` +
      `Travelers: ${this.inquiry.travelers || '-'}%0A` +
      `Notes: ${this.inquiry.notes || '-'}`;
    return `https://wa.me/${this.whatsappNumber}?text=${message}`;
  }

  protected submitInquiry(): void {
    if (typeof window !== 'undefined') {
      window.open(this.getWhatsappUrl(), '_blank', 'noopener,noreferrer');
    }
  }
}
