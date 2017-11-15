import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { URL_SERVICIOS } from '../config/url.servicios';

import { AlertController, Platform } from 'ionic-angular';

// plugin storage
import { Storage } from '@ionic/storage';

@Injectable()
export class UsuarioService {

  token:string;
  userName:string;

  constructor(public http: Http,
              private alertCtrl: AlertController,
              private platform:Platform,
              private storage: Storage ) {

    console.log('Hello UsuarioProvider Provider');
    this.cargar_storage();
  }

  activo():boolean{

    if( this.token){
      return true;
    }else{
      return false;
    }
  }

  ingresar( userName:string, password:string ){

    /*let data = new URLSearchParams();
    data.append("userName", userName);
    data.append("password", password);*/

    let url = URL_SERVICIOS + "/signIn";

    let header=new Headers({'Content-Type': 'application/json', 'API_KEY':
    'RWxHdWlsbGVTZUxhQ29tZVhE'});

    let options = new RequestOptions({ headers: header });

    let data = JSON.stringify({
      userName: userName,
      password: password
    });

    return this.http.post( url, data, options )
                    .map( resp=>{

                    let data_resp = resp.json();
                    console.log( data_resp );

                    if( data_resp.error ){
                      this.alertCtrl.create({
                        title: "Error al iniciar",
                        subTitle: data_resp.mensaje,
                        buttons: ["OK"]
                      }).present();
                    }else{
                      this.token = data_resp.token;
                      this.userName = data_resp.userName;

                      // guardar storage
                      this.guardar_storage();
                    }

                  });

  }

  cerrar_sesion(){

    this.token = null;
    this.userName = null;

    //guardar storage
    this.guardar_storage();
  }

  private guardar_storage(){

    if( this.platform.is("cordova") ){
      //dispositivo
      this.storage.set('token', this.token );
      this.storage.set('userName', this.userName)
    }else{
      //computadora
      if( this.token ){
        localStorage.setItem("token", this.token );
        localStorage.setItem("userName", this.userName );
      }else{
        localStorage.removeItem("token");
        localStorage.removeItem("userName");
      }
    }

  }

  cargar_storage(){

    let promesa = new Promise( ( resolve, reject )=>{

      if( this.platform.is("cordova") ){
        //dispositivo
        this.storage.ready()
                    .then( ()=>{

                    this.storage.get("token")
                                .then( token => {
                                  if( token ){
                                    this.token = token;
                                  }
                                })

                    this.storage.get("userName")
                                .then( userName => {
                                  if( userName ){
                                    this.userName = userName;
                                  }
                                  resolve();
                                })
              })

      }else{
        //computadora
        if( localStorage.getItem("token") ){
          //Existe items en el localStorage
          this.token =  localStorage.getItem("token");
          this.userName =  localStorage.getItem("userName");
        }

        resolve();
      }

    });

    return promesa;

  }

}
