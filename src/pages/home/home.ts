import { Component } from '@angular/core';

//Componentes
import { ToastController, Platform } from 'ionic-angular';
import { Toast } from '@ionic-native/toast';
// Plugins
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

// servicios
import { HistorialService } from "../../providers/historial";
import { UsuarioService } from '../../providers/usuario';
import { PacientesService } from '../../providers/pacientes';
import { Patient } from '../../models/patient.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {
  patient: Patient;
  patients: Patient[];
  selectedPatient: any;
  //patientFound:boolean = false;

  constructor( private barcodeScanner: BarcodeScanner,
               private toastCtrl: ToastController,
               private platform: Platform,
               private _historialService: HistorialService,
               private _us: UsuarioService,
               private _ps: PacientesService,
               private toast: Toast ) {
                 this._ps.getPatientById(barcodeScanner)
                 .subscribe((response)=>{
                   this.patient = response
                   console.log(this.patient);
                 });
}

scan(){
  this.selectedPatient = {};

  this.barcodeScanner.scan().then( (barcodeData) => {
    this._ps.getPatientById(barcodeData.text).subscribe(data => {
      this.patient = data;
    });
   /*this.selectedPatient = this.patients.find(patient => patient.patientId == barcodeData.text);
   if(this.selectedPatient !== undefined) {
      this.patientFound = true;
      console.log(this.selectedPatient);
    } else {
      this.selectedPatient = {};
      this.patientFound = false;
      this.toast.show('Paciente no encontrado', '5000', 'center').subscribe(
        toast => {
          console.log(toast);*/
          if(  barcodeData.text != null ){
               this._historialService.agregar_historial( barcodeData.text );
             }


            }, (err) => {
                console.error("Error: ", err );
                this.mostrar_error( "Error: " + err );
            });

          }
/*   if(  barcodeData.text != null ){
     this._historialService.agregar_historial( barcodeData.text );
   }


  }, (err) => {
      console.error("Error: ", err );
      this.mostrar_error( "Error: " + err );
  });

}*/

mostrar_error( mensaje:string ){

  let toast = this.toastCtrl.create({
    message: mensaje,
    duration: 2500
  });

  toast.present();

}

}
