import { Component, signal } from '@angular/core';
import { PACKAGE_CATEGORIES, PACKAGES } from '../shared/site.constants';
import { getWhatsappUrl } from '../shared/whatsapp.util';

@Component({
  selector: 'app-packages',
  imports: [],
  templateUrl: './packages.html',
  styleUrl: './packages.scss',
})
export class Packages {
  protected readonly packageCategories = PACKAGE_CATEGORIES;
  protected readonly packages = PACKAGES;
  protected readonly selectedCategory = signal('All');
  protected readonly whatsappUrl = getWhatsappUrl(false);

  protected setCategory(category: string): void {
    this.selectedCategory.set(category);
  }

  protected getFilteredPackages() {
    const category = this.selectedCategory();
    if (category === 'All') return this.packages;
    return this.packages.filter((p) => p.category === category);
  }
}
