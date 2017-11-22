import { Component } from '@angular/core';

//Componentes
import { ToastController, Platform } from 'ionic-angular';

// Plugins
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

// servicios
import { HistorialService } from "../../providers/historial";
import { UsuarioService } from '../../providers/usuario';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  scannedCode = null;

  constructor( private barcodeScanner: BarcodeScanner,
               private toastCtrl: ToastController,
               private platform: Platform,
               private _historialService: HistorialService,
               private _us: UsuarioService ) {
}

scan(){
  console.log("Realizando scan...");

  if( !this.platform.is('cordova') ){
    //this._historialService.agregar_historial( "MATMSG:TO:fernando.herrera85@gmail.com;SUB:Hola Mundo;BODY:Saludos Fernando;;" );


    return;
  }


  this.barcodeScanner.scan().then( (barcodeData) => {
   // Success! Barcode data is here
   this.scannedCode = barcodeData.text;
   console.log("result:", barcodeData.text );
   console.log("format:", barcodeData.format );
   console.log("cancelled:", barcodeData.cancelled );

   if(  barcodeData.text != null ){
     this._historialService.agregar_historial( barcodeData.text  );
   }


  }, (err) => {
      // An error occurred
      console.error("Error: ", err );
      this.mostrar_error( "Error: " + err );
  });

}

mostrar_error( mensaje:string ){

  let toast = this.toastCtrl.create({
    message: mensaje,
    duration: 2500
  });

  toast.present();

}

}
