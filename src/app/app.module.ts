import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { PhotosComponent } from './components/photos/photos.component';
import { PhotoItemComponent } from './components/photo-item/photo-item.component';
import { PhotodetailsComponent } from './components/photodetails/photodetails.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { RouterModule, Routes } from '@angular/router';
import { PhotoEditComponent } from './components/photo-edit/photo-edit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MymodalComponent } from './mymodalcomponent/mymodalcomponent.component';
import {
  NgbdModalConfirm,
  NgbdModalConfirmAutofocus,
  NgbdModalFocus
} from './mymodalcomponent/mymodalcomponent.component';

const appRoutes: Routes = [
  { path: '', component: PhotosComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'photos/:id', component: PhotodetailsComponent },
  { path: 'photos/edit/:id', component: PhotoEditComponent },
  // { path: 'search', component: SearchComponent },
  // { path: 'p', component: PostsComponent },
  // { path: 'posts', component: PostsComponent },
  // { path: 'profile/:username', component: UserprofileComponent,
  //   children: [
  //     {path: '', component:PostsComponent}
  //   ] 
  // },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    PhotosComponent,
    PhotodetailsComponent,
    PhotoItemComponent,
    PagenotfoundComponent,
    PhotoEditComponent,
    MymodalComponent,
    NgbdModalFocus, NgbdModalConfirm, NgbdModalConfirmAutofocus
  ],
  imports: [
    BrowserModule, HttpClientModule,FormsModule ,NgbModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    NgbModule
  ],
  entryComponents:[
    MymodalComponent, NgbdModalConfirm, NgbdModalConfirmAutofocus
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
