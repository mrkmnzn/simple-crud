import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './app/user/pages/profile/profile.component';
import { FormComponent } from './app/user/components/form/form.component';
import { BookListComponent } from './app/book/pages/book-list/book-list.component';
import { BookItemComponent } from './app/book/components/book-item/book-item.component';
import { BlogListComponent } from './app/blog/pages/blog-list/blog-list.component';
import { BlogItemComponent } from './app/blog/components/blog-item/blog-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    FormComponent,
    BookListComponent,
    BookItemComponent,
    BlogListComponent,
    BlogItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
