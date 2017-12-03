import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage, GuardadosPage, TabsPage, LoginPage } from '../pages/index.paginas';

import { IonicStorageModule } from '@ionic/storage';

//servicios
import { AjustesService } from '../providers/ajustes';
import { HistorialService } from '../providers/historial';
import { PacientesService } from '../providers/pacientes';
import { UsuarioService } from '../providers/usuario';
import { AuthService } from '../providers/auth.service';
import { UtilitiesService } from '../providers/utilities.service';

//plugins
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Contacts } from '@ionic-native/contacts';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Toast } from '@ionic-native/toast';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    GuardadosPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GuardadosPage,
    HomePage,
    LoginPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    InAppBrowser,
    Contacts,
    Toast,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AjustesService,
    HistorialService,
    UsuarioService,
    PacientesService,
    AuthService,
    UtilitiesService
  ]
})
export class AppModule {}
