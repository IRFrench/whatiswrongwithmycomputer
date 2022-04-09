import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhyGitPage } from './why-git.page';

const routes: Routes = [
  {
    path: '',
    component: WhyGitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhyGitPageRoutingModule {}
