import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RechercheimeiPage } from './rechercheimei.page';

const routes: Routes = [
  {
    path: '',
    component: RechercheimeiPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RechercheimeiPage]
})
export class RechercheimeiPageModule {}
