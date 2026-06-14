import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Input, OnInit, PLATFORM_ID, inject, signal } from '@angular/core';

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
export class NavHeader implements OnInit {
  private readonly platformId = inject(PLATFORM_ID);

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

  protected readonly menuOpen = signal(false);
  protected readonly mobileNav = signal(false);

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId) || typeof window.matchMedia !== 'function') return;

    const mediaQuery = window.matchMedia('(max-width: 1024px)');
    const syncViewport = () => this.mobileNav.set(mediaQuery.matches);

    syncViewport();
    mediaQuery.addEventListener('change', syncViewport);
  }

  protected menuInert(): boolean {
    return this.mobileNav() && !this.menuOpen();
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
    this.syncBodyScroll();
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
    this.syncBodyScroll();
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    this.closeMenu();
  }

  @HostListener('window:resize')
  protected onResize(): void {
    if (this.menuOpen() && typeof window !== 'undefined' && window.innerWidth > 1024) {
      this.closeMenu();
    }
  }

  private syncBodyScroll(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    document.body.style.overflow = this.menuOpen() ? 'hidden' : '';
  }
}
