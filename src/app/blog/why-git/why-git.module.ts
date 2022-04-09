import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhyGitPageRoutingModule } from './why-git-routing.module';

import { WhyGitPage } from './why-git.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WhyGitPageRoutingModule
  ],
  declarations: [WhyGitPage]
})
export class WhyGitPageModule {}
