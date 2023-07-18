import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page.component';
import { EditorPageComponent } from './components/editor-page.component';
import { ComponentsPageComponent } from './components/components-page.component';
import { GuidesPageComponent } from './components/guides-page.component';
import { ComponentPageComponent } from './components/component-page.component';
import { ComponentsComponent } from './components/components.component';
import { CategoriesComponent } from './components/categories.component';
import { ExamplesPageComponent } from './components/examples-page/examples-page.component';
import { ExampleViewComponent } from './components/example-view.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'editor', component: EditorPageComponent },
  { path: 'guides', component: GuidesPageComponent },
  {
    path: 'components', component: ComponentsPageComponent,
    children: [
      { path: '', component: ComponentsComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'categories/:packageName/:category', component: ComponentsComponent },
      { path: ':packageName/:component', component: ComponentPageComponent },
    ]
  },
  {
    path: 'examples', component: ExamplesPageComponent,
    children: [
      { path: '', component: ExampleViewComponent },
      { path: ':example', component: ExampleViewComponent }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
