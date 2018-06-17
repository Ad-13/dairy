import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ItemsCardComponent } from './items-card/items-card.component';
import { CommentsCardComponent } from './comments-card/comments-card.component';
import { ItemsFormComponent } from './items-form/items-form.component';
import { ItemComponent } from './item/item.component';

import { ItemsService } from './services/items.service';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainContentComponent,
    ItemsCardComponent,
    CommentsCardComponent,
    ItemsFormComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
