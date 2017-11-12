import { Injectable } from '@angular/core';

import { ScanData } from "../models/scan-data.model";

import { InAppBrowser } from '@ionic-native/in-app-browser';

import { ModalController, Platform } from "ionic-angular";

@Injectable()
export class HistorialService {

  private _historial:ScanData[] = [];


  constructor( private iab: InAppBrowser,
               private modalCtrl: ModalController,
               private platform:Platform) { }


  agregar_historial( texto:string ){

    let data = new ScanData( texto );

    this._historial.unshift( data );

    console.log( this._historial );

    this.abrir_scan(0);

  }

  abrir_scan( index:number){

    let scanData = this._historial[index];
    console.log( scanData );

    switch( scanData.tipo ){

      case "http":
        this.iab.create( scanData.info, "_system" );

      break;

      case "email":

        // "MATMSG:TO:fernando.herrera85@gmail.com;SUB:Hola Mundo;BODY:Saludos Fernando;;"
        let htmlLink = scanData.info;
        // let htmlLink = "mailto:name1@rapidtables.com?subject=hola%20mundo&body=The%20body%20of%20the%20email";

        htmlLink = htmlLink.replace("MATMSG:TO:","mailto:");
        htmlLink = htmlLink.replace(";SUB:", "?subject=");
        htmlLink = htmlLink.replace(";BODY:", "&body=");
        htmlLink = htmlLink.replace(";;", "");
        htmlLink = htmlLink.replace(/ /g, "%20");

        console.log(htmlLink);

        this.iab.create( htmlLink, "_system" );

      break;

      default:
        console.error("Tipo no soportado");

    }
  }

  cargar_historial(){
    return this._historial;
  }


}
