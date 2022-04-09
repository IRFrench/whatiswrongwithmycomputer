import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public blog_posts = [
    { title: 'Why Git?', url: '/blog/why-git', snap: "This may not be useful for many, but to some this may be very useful. There is not a lot ... " },
    { title: 'Why Netbox?', url: '/blog/why-netbox', snap: "What is the point of using netbox? ..." },
  ];

}
