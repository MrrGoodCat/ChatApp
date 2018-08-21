import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: "AIzaSyDuPLntZ_9VPAXFSbVX8uFdVwURK5IZahs",
  authDomain: "chatapp-b87cf.firebaseapp.com",
  databaseURL: "https://chatapp-b87cf.firebaseio.com",
  projectId: "chatapp-b87cf",
  storageBucket: "chatapp-b87cf.appspot.com",
  messagingSenderId: "552400977714"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
