import { Component } from '@angular/core';
import { FOOTER_COLUMNS, SITE } from '../shared/site.constants';

@Component({
  selector: 'app-site-footer',
  imports: [],
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.scss',
})
export class SiteFooter {
  protected readonly site = SITE;
  protected readonly footerColumns = FOOTER_COLUMNS;
}
