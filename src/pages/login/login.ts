import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, AlertController } from 'ionic-angular';

import { UsuarioService } from '../../providers/usuario';
import { TabsPage } from '../../pages/tabs/tabs';
import {LoginModel} from '../../models/login.model';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user: LoginModel = new LoginModel();

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private viewCtrl: ViewController,
              public alertCtrl: AlertController,
              private _us:UsuarioService ) {
  }

  /*doAlert() {
  let alert = this.alertCtrl.create({
    title: 'Error Ingreso',
    message: 'El usuario y/o contrasena ingresado son incorrectos. ',
    buttons: ['Ok']
    });
  alert.present()
}*/

  ingresar(){

    this._us.signIn( this.user.userName, this.user.password )
            .subscribe( ()=> {

                this.navCtrl.push( TabsPage );
                this.viewCtrl.dismiss(true);

              /*else{
                let alert = this.alertCtrl.create({
                  title: 'Error Ingreso',
                  message: 'El usuario y/o contrasena ingresado son incorrectos. ',
                  buttons: ['Ok']
                  });
                alert.present();
              }*/
            })
  }

}
