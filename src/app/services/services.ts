import { Component } from '@angular/core';
import { SERVICES } from '../shared/site.constants';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  protected readonly services = SERVICES;
}
