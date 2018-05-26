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
//import {MOCK_PATIENT} from '../../config/url.servicios';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {
  patient: any;
  patients: Patient[];
  selectedPatient: any;
  patientFound:boolean = false;

  constructor( private barcodeScanner: BarcodeScanner, private toastCtrl: ToastController, private platform: Platform, private _historialService: HistorialService, private _us: UsuarioService, private _ps: PacientesService, private toast: Toast ) {
    console.log("PatientFound",this.patientFound);
  }

scan(){

// this.patient = MOCK_PATIENT

  this.selectedPatient = {};

  this.patientFound = true;

   this.barcodeScanner.scan().then( (barcodeData) => {
      this._ps.getPatientById(barcodeData.text).subscribe(data => {
        this.patient = data;
      });
  //  this.selectedPatient = this.patients.find(patient => patient.patientId == barcodeData.text);
  //  if(this.selectedPatient !== undefined) {
  //     this.patientFound = true;
  //     console.log(this.selectedPatient);
  //   } else {
  //     this.selectedPatient = {};
  //     this.patientFound = false;
  //     this.toast.show('Paciente no encontrado', '5000', 'center').subscribe(
  //       toast => {
  //         console.log(toast);
           if(  barcodeData.text != null ){
                this._historialService.agregar_historial( barcodeData.text );
              }


             }, (err) => {
                 console.error("Error: ", err );
                 this.mostrar_error( "Error: " + err );
             });

           }
  //   if(  barcodeData.text != null ){
  //    this._historialService.agregar_historial( barcodeData.text );
  //  }


  // }, (err) => {
  //     console.error("Error: ", err );
  //     this.mostrar_error( "Error: " + err );
  // });

//}

mostrar_error( mensaje:string ){

  let toast = this.toastCtrl.create({
    message: mensaje,
    duration: 2500
  });

  toast.present();

}

}
