import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { HomePage } from '../pages/home/home';
import { ChatPage } from '../pages/chat/chat';

var config = {
  apiKey: "AIzaSyCQpd1iuI-SpB-2NH0fM8d4j_fGZBh7lNc",
  authDomain: "ionic-chat-app-f223e.firebaseapp.com",
  databaseURL: "https://ionic-chat-app-f223e.firebaseio.com",
  projectId: "ionic-chat-app-f223e",
  storageBucket: "ionic-chat-app-f223e.appspot.com",
  messagingSenderId: "72826839295"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
