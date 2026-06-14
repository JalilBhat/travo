import { Component } from '@angular/core';
import { BLOGS } from '../shared/site.constants';

@Component({
  selector: 'app-blog',
  imports: [],
  templateUrl: './blog.html',
  styleUrl: './blog.scss',
})
export class Blog {
  protected readonly blogs = BLOGS;
}
