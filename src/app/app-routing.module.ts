import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'resultatrecherche', pathMatch: 'full' },
  { path: 'quietesvous', loadChildren: './pages/quietesvous/quietesvous.module#QuietesvousPageModule' },
  { path: 'resultatrecherche/:id', loadChildren: './pages/resultats/rechercheimei.module#RechercheimeiPageModule' },
  { path: 'resultatrecherche', loadChildren: './pages/resultatrecherche/resultatrecherche.module#ResultatrecherchePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
