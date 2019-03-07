import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page.component';
import { EditorPageComponent } from './components/editor-page.component';
import { ComponentsPageComponent } from './components/components-page.component';
import { GuidesPageComponent } from './components/guides-page.component';
import { ExampleComponent } from './components/example.component';
import { CardsComponent } from './components/cards.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'editor', component: EditorPageComponent },
  { path: 'guides', component: GuidesPageComponent },
  { path: 'components', component: ComponentsPageComponent,
    children: [
      { path: ':component', component: ExampleComponent },
      { path: '', component: CardsComponent }
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
