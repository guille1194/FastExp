import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

import { UsuarioService } from '../../providers/usuario';
import { HomePage } from '../../pages/home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  userName:string = "";
  password:string = "";


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private viewCtrl: ViewController,
              private _us:UsuarioService ) {
  }

  ingresar(){

    this._us.ingresar( this.userName, this.password )
            .subscribe( ()=> {

              if( this._us.activo() ){
                this.viewCtrl.dismiss(true);
                this.navCtrl.setRoot( HomePage );
              }
            })
      }

}
