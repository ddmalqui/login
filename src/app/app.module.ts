import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SingUpPage } from '../pages/sing-up/sing-up';
import { PerfilPage } from '../pages/perfil/perfil';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase  } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { Authentication } from '../services/authentication';

import { Uploader } from '../services/uploader';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {firebaseConfig} from '../environments/firebase-config';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SingUpPage,
    PerfilPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SingUpPage,
    PerfilPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Authentication,
    Uploader,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
