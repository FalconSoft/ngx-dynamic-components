import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';


import { FlexLayoutModule } from '@angular/flex-layout';
import { ResizableModule } from 'angular-resizable-element';
import { DynamicComponentsCoreModule } from '@ngx-dynamic-components/core';
import { ToolsModule } from '@ngx-dynamic-components/tools';
import { MaterialModule } from '@ngx-dynamic-components/material';
import { DynamicComponentsBootstrapModule } from '@ngx-dynamic-components/bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page.component';
import { NavComponent } from './components/nav.component';
import { EditorPageComponent } from './components/editor-page.component';
import { GuidesPageComponent } from './components/guides-page.component';
import { ComponentsPageComponent } from './components/components-page.component';
import { PageHeaderComponent } from './components/page-header.component';
import { ComponentPageComponent } from './components/component-page.component';
import { CardsComponent } from './components/cards/cards.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { CategoriesComponent } from './components/categories.component';
import { ComponentsComponent } from './components/components.component';
import { ItemPropertiesComponent } from './components/item-properties/item-properties.component';
import { JsonFormatterDirective } from './directives/json-formatter.directive';
import { ExamplesPageComponent } from './components/examples-page/examples-page.component';
import { ExampleViewComponent } from './components/example-view.component';
import { SidenavLayoutComponent } from './components/sidenav-layout.component';
import { StaticExampleViewComponent } from './components/static-example-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavComponent,
    EditorPageComponent,
    GuidesPageComponent,
    ComponentsPageComponent,
    PageHeaderComponent,
    ComponentPageComponent,
    CardsComponent,
    SideBarComponent,
    CategoriesComponent,
    ComponentsComponent,
    ItemPropertiesComponent,
    JsonFormatterDirective,
    ExamplesPageComponent,
    ExampleViewComponent,
    SidenavLayoutComponent,
    StaticExampleViewComponent
  ],
  imports: [
    BrowserModule,
    DynamicComponentsCoreModule,
    ToolsModule,
    MaterialModule,
    DynamicComponentsBootstrapModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatExpansionModule,
    MatIconModule,
    FlexLayoutModule,
    ResizableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
