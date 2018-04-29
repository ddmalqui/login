import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastController } from 'ionic-angular';


import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SingUpPage } from '../pages/sing-up/sing-up';
import { PerfilPage } from '../pages/perfil/perfil';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase  } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

/*Services*/
import { Authentication } from '../services/authentication';
import { Crud } from '../services/crud';

import { Uploader } from '../services/uploader';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Device } from '@ionic-native/device';

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
    AngularFireAuthModule,
    FormsModule
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
    Crud,
    ToastController,
    Uploader,
    Device,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
