import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogPage } from './blog.page';

const routes: Routes = [
  {
    path: '',
    component: BlogPage
  },
  {
    path: 'why-git',
    loadChildren: () => import('./why-git/why-git.module').then( m => m.WhyGitPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogPageRoutingModule {}
