import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/index.paginas';

import { AjustesService } from '../providers/ajustes';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  rootPage:any;

  constructor(private platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              private _ajustes:AjustesService) {
    platform.ready().then(() => {

      this._ajustes.cargar_storage()
          .then( ()=>{

            if( this._ajustes.ajustes.mostrar_tutorial ){
              this.rootPage = "Introduccion";
            }else{
              this.rootPage = TabsPage;
            }

              this.platform.pause.subscribe( ()=> {
                console.log("La aplicacion se detendra");
              });

              this.platform.resume.subscribe( ()=>{
                console.log("La aplicacion va a continuar");
              })

              statusBar.styleDefault();
              splashScreen.hide();
            })
    });
  }
}
