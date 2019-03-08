import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatButtonModule, MatTabsModule, MatSidenavModule, MatListModule, MatCardModule,
  MatTableModule, MatExpansionModule } from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';

import { ToolsModule } from '@ngx-dynamic-components/tools';
import { MaterialModule } from '@ngx-dynamic-components/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page.component';
import { NavComponent } from './components/nav.component';
import { EditorPageComponent } from './components/editor-page.component';
import { GuidesPageComponent } from './components/guides-page.component';
import { ComponentsPageComponent } from './components/components-page.component';
import { PageHeaderComponent } from './components/page-header.component';
import { ExampleComponent } from './components/example.component';
import { CardsComponent } from './components/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavComponent,
    EditorPageComponent,
    GuidesPageComponent,
    ComponentsPageComponent,
    PageHeaderComponent,
    ExampleComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    ToolsModule,
    MaterialModule,
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
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
