import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

import { AjustesService } from '../../providers/ajustes';

@IonicPage()
@Component({
  selector: 'page-introduccion',
  templateUrl: 'introduccion.html',
})
export class Introduccion {

  slides:any[] = [
  {
    title: "Bienvenido!!!",
    description: "Esta <b>aplicación</b> sirve para ayudar a los medicos en casos de emergencia",
    image: "assets/img/ica-slidebox-img-1.png",
  },
  {
    title: "¿Qué es FastExp?",
    description: "<b>FastExp</b> es un programa que permite a los medicos obtener todo el historial clinico del paciente a traves de QR",
    image: "assets/img/ica-slidebox-img-2.png",
  },
  {
    title: "¿Que hace esta app?",
    description: "Esta aplicación nos ayudará a almacenar en la nube todo el historial clinico de pacientes, y que este sea de facil acceso",
    image: "assets/img/ica-slidebox-img-3.png",
  }
];

  constructor(public navCtrl: NavController,
              private _ajustes: AjustesService ) {

  }

  saltar_tutorial(){
    this._ajustes.ajustes.mostrar_tutorial = false;
    this._ajustes.guardar_storage();

    this.navCtrl.setRoot( LoginPage );
  }

}
